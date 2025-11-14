#!/usr/bin/env bash

# This script updates the 'updated' field in the front matter of modified .md files.

# Get the list of modified .md files that are currently staged
MODIFIED_MD_FILES=$(git diff --cached --name-only --diff-filter=M | grep 'src/content/post/.*\.md$')

for file in $MODIFIED_MD_FILES; do
    # Check if file has frontmatter (starts with '---')
    if [[ "$(head -n 1 "$file")" == "---" ]]; then
        # Use sed to find and replace the updated field within the frontmatter block
        # The regex looks for 'updated:' and updates the value to the current UTC timestamp
        # The -i flag edits the file in place
        # Note: 'sed -i' usage can vary slightly between GNU/Linux and macOS.
        # For macOS, you might need 'sed -i ""' or use a temporary file approach.

        # Cross-platform sed command (requires a temp file for portability)
        # Using a safer approach with a temp file:
        TMP_FILE=$(mktemp)
        MODIFIED_DATE=$(stat -c "%y" $file)
        MODIFIED_DATE_ISO=$MODIFIED_DATE | cut -d' ' -f1
        sed '/^---/,/^---/s/^updated:.*$/updated: '"$MODIFIED_DATE_ISO"'/' "$file" > "$TMP_FILE" && mv "$TMP_FILE" "$file"
        touch -m "$MODIFIED_DATE" "$file"

        # Re-stage the modified file so the changes are included in the commit
        git add "$file"
        echo "Updated updated in $file"
    fi
done

# Exit with 0 to allow the commit to proceed
exit 0