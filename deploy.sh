aws cloudformation create-stack \
    --stack-name compose-infrastructure \
    --template-body file://infrastructure/cloudformation.yaml \
    --capabilities CAPABILITY_IAM

VPC_ID=$(aws cloudformation describe-stacks --stack-name compose-infrastructure --query "Stacks[0].Outputs[?OutputKey=='VpcId'].OutputValue" --output text)

# Set the ECS Cluster Name
ECS_CLUSTER=$(aws cloudformation describe-stacks --stack-name compose-infrastructure --query "Stacks[0].Outputs[?OutputKey=='ClusterName'].OutputValue" --output text)

# The Loadbalancer Arn
LOADBALANCER_ARN=$(aws cloudformation describe-stacks --stack-name compose-infrastructure --query "Stacks[0].Outputs[?OutputKey=='LoadbalancerId'].OutputValue" --output text)

aws cloudformation create-stack \
     --stack-name compose-pipeline \
     --template-body file://pipeline/cloudformation.yaml \
     --capabilities CAPABILITY_IAM \
     --parameters \
     ParameterKey=ExistingAwsVpc,ParameterValue=$VPC_ID \
     ParameterKey=ExistingEcsCluster,ParameterValue=$ECS_CLUSTER \
     ParameterKey=ExistingLoadbalancer,ParameterValue=$LOADBALANCER_ARN

# Retrieve the S3 Bucket Name
BUCKET_NAME=$(aws cloudformation describe-stacks --stack-name compose-pipeline --query "Stacks[0].Outputs[?OutputKey=='S3BucketName'].OutputValue" --output text)

# Zip up the Code and Upload to S3
zip -r compose-bundle.zip .
aws s3 cp compose-bundle.zip s3://$BUCKET_NAME/compose-bundle.zip

# Print link
echo Check AWS for details
echo Deploying to $(aws cloudformation describe-stacks --stack-name compose-infrastructure --query "Stacks[0].Outputs[?OutputKey=='LoadbalancerEndpoint'].OutputValue" --output text)
