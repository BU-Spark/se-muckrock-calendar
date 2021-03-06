function verify_source {
    if git branch $1 --contains $GITHUB_REF | grep -q $1; then
        return 0
    else
        return -1
    fi
}

if verify_source "main" || verify_source "master"; then
    echo "Good Source"
    exit 0
else
    # Didn't come from master or main
    echo "Bad Source"
    echo git branch main --contains $GITHUB_REF
    echo git branch master --contains $GITHUB_REF
    exit -1

fi
