#!/bin/bash

# Adding everything
echo "Adding new files..."
git add mods &> /dev/null
git add config &> /dev/null
git add dev &> /dev/null
git add options.txt &> /dev/null
git add changelog.txt &> /dev/null
git add build.sh &> /dev/null

# Checking status
git status

# Pushing
git commit
git push -u origin main

# All is well
echo "All is well and all the things are well"
