# Development Workflow for Multi-CRM Platform

This document outlines the git workflow for developing multiple CRM applications based on the ever-gauzy platform.

## Repository Structure

- `upstream` - Original ever-gauzy repository (https://github.com/ever-co/ever-gauzy)
- `origin` - Main development repository (https://github.com/dvskhamele/ever-gauzy)
- `backup-origin` - Backup repository

## Branching Strategy

### Main Branches
- `develop` - Main development branch where all feature branches are merged
- `master` - Production-ready code (synced from upstream when appropriate)

### Feature Branches
- `hrms-crm` - Branch for Human Resource Management System CRM development
- `shopping-site-crm` - Branch for e-commerce/shopping site CRM development
- `consultant-crm` - Branch for consultant-focused CRM development
- `crm-features` - Common CRM features that can be shared across all CRM types

## Development Workflow

### 1. Setting Up Your Development Environment
```bash
git clone https://github.com/dvskhamele/ever-gauzy.git
cd ever-gauzy
git fetch --all
```

### 2. Working on a Specific CRM Type
```bash
# For HRMS CRM
git checkout hrms-crm
# Do your development work
git commit -m "feat(hrms): add employee management feature"

# For Shopping Site CRM
git checkout shopping-site-crm
# Do your development work
git commit -m "feat(shopping): add cart management feature"

# For Consultant CRM
git checkout consultant-crm
# Do your development work
git commit -m "feat(consultant): add project tracking feature"
```

### 3. Adding Common Features
```bash
# For features applicable to all CRM types
git checkout crm-features
# Do your development work
git commit -m "feat(common): add notification system"
```

### 4. Syncing with Upstream
```bash
git checkout develop
git pull upstream develop
git push origin develop

# Then merge into your feature branch
git checkout hrms-crm
git merge develop
```

### 5. Merging Features Back
```bash
# After completing work on a feature
git checkout develop
git merge hrms-crm
git push origin develop

# Then delete the feature branch if no longer needed
git branch -d hrms-crm
```

## Commit Message Format

Use the following format for commit messages:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Where:
- `type` is one of: feat, fix, docs, style, refactor, test, chore
- `scope` is one of: hrms, shopping, consultant, common, or other specific module
- `subject` is a brief description of the change

Example:
```
feat(hrms): add employee onboarding workflow

- Added new form for employee information
- Created workflow for document collection
- Integrated with existing approval system

Closes #1234
```

## Pull Request Process

1. Ensure your feature branch is up-to-date with the develop branch
2. Create a pull request from your feature branch to develop
3. Include a detailed description of the changes
4. Tag relevant team members for review
5. Ensure all tests pass before merging

## Release Process

1. Create a release branch from develop: `release/vX.Y.Z`
2. Update version numbers and prepare release notes
3. Test thoroughly on the release branch
4. Merge to master with a tagged commit
5. Synchronize with upstream if appropriate