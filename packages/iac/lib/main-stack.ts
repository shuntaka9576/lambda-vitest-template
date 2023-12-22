import { Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
type MainStackProps = StackProps;

export class MainStack extends Stack {
  constructor(scope: Construct, id: string, props: MainStackProps) {
    super(scope, id, props);

    new cdk.aws_lambda.Function(this, 'sampleLambda', {
      functionName: 'sample-lambda',
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      code: cdk.aws_lambda.Code.fromAsset('../app/dist'),
      handler: 'index.handler',
      timeout: cdk.Duration.seconds(5),
    });
  }
}
