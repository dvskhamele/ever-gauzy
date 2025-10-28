#!/usr/bin/env node

/**
 * Script to fix the deprecated NewOrCopy method in sharp's metadata.cc file
 * This addresses the issue where Napi::Buffer<char>::NewOrCopy has been deprecated in newer Node-API
 */

const fs = require('fs');
const path = require('path');

// Define the replacement function for the deprecated NewOrCopy method
function fixMetadataFile(metadataFilePath) {
    console.log(`Fixing metadata.cc file at: ${metadataFilePath}`);
    
    try {
        // Read the content of the metadata.cc file
        let content = fs.readFileSync(metadataFilePath, 'utf8');
        
        // Store original content for backup
        fs.writeFileSync(metadataFilePath + '.backup', content);
        
        // Replace NewOrCopy with Copy for Napi::Buffer
        // This is the main fix for the deprecated method
        let fixedContent = content.replace(
            /Napi::Buffer<char>::NewOrCopy\(env,\s*baton->(\w+),\s*baton->(\w+Length),\s*sharp::FreeCallback\)/g,
            'Napi::Buffer<char>::Copy(env, baton->$1, baton->$2)'
        );
        
        // Alternative fix - in case the above doesn't catch all cases
        fixedContent = fixedContent.replace(
            /Napi::Buffer<char>::NewOrCopy\(env,\s*(.+?),\s*(.+?),\s*sharp::FreeCallback\)/g,
            'Napi::Buffer<char>::Copy(env, $1, $2)'
        );
        
        // Write the fixed content back to the file
        fs.writeFileSync(metadataFilePath, fixedContent);
        console.log('Successfully fixed the metadata.cc file!');
        console.log('The deprecated NewOrCopy method has been replaced with Copy method.');
        
        return true;
    } catch (error) {
        console.error(`Error fixing metadata.cc file: ${error.message}`);
        return false;
    }
}

function findAndFixSharp() {
    const sharpPath = path.join(__dirname, 'node_modules', 'sharp', 'src');
    
    if (!fs.existsSync(sharpPath)) {
        console.log('Sharp module not found in node_modules. It might be installed as a prebuilt binary.');
        console.log('The issue occurs when sharp needs to be compiled from source.');
        console.log('If you encounter the compilation error again, install sharp from source and then run this script.');
        return;
    }
    
    const metadataPath = path.join(sharpPath, 'metadata.cc');
    
    if (!fs.existsSync(metadataPath)) {
        console.log(`metadata.cc not found at ${metadataPath}`);
        // Try other possible locations
        const possiblePaths = [
            path.join(sharpPath, 'lib', 'metadata.cc'),
            path.join(sharpPath, 'src', 'binding.cc'),
            path.join(sharpPath, 'binding.cc')
        ];
        
        for (const possiblePath of possiblePaths) {
            if (fs.existsSync(possiblePath)) {
                console.log(`Found potential file at: ${possiblePath}`);
                if (fixMetadataFile(possiblePath)) {
                    return;
                }
            }
        }
        
        console.log('Could not find the sharp metadata file to fix.');
        return;
    }
    
    fixMetadataFile(metadataPath);
}

// Run the function
findAndFixSharp();

console.log('\\nIf you encounter the original error again where sharp fails to compile:');
console.log('1. Make sure you have the build tools installed (Xcode Command Line Tools on macOS)');
console.log('2. The error typically occurs due to the deprecated NewOrCopy method in Node-API');
console.log('3. This script provides the fix when the source files are available.');