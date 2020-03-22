(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{wWT3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return o}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt"),a("mXGw");var n=a("/FXl"),r=a("TjRS");a("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"manual/Kubernetes/AWS-EKS-Starter.md"}});var i={_frontmatter:c},b=r.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,l({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"aws-eks-starter"},"AWS EKS Starter"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#aws-eks-starter"}),"AWS EKS Starter"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#eks-setup-process"}),"EKS Setup Process"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#eks-use-cases"}),"EKS Use cases")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#the-course"}),"The Course")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#eks-architecture"}),"EKS Architecture")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#basic-eks-setup"}),"Basic EKS Setup")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#setup-for-the-eks-cluster"}),"Setup for the EKS cluster")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#iam-user-roles"}),"IAM User roles"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#iam-user-and-permissions"}),"IAM user and permissions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#create-iam-role"}),"Create IAM role")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#create-keypair"}),"Create keypair")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#create-api-access-key-secret"}),"Create API Access key/-secret")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#create-base-aws-infrastructure"}),"Create base AWS infrastructure"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#create-vpc-subnets-and-security-group-for-your-k8s-cluster"}),"Create VPC, subnets and security group for your K8s cluster"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#working-on-the-console"}),"Working on the console")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#setting-stack-name"}),"Setting stack name")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#continuing-on"}),"Continuing on")))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#creating-the-eks-control-plane"}),"Creating the EKS control plane"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#via-cli"}),"Via CLI")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#via-gui"}),"Via GUI")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#setting-up-local-kubectl-for-eks"}),"Setting up local kubectl for EKS"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#recap-on-the-kubectl-setup"}),"Recap on the kubectl setup")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#install-kubectl--aws-iamauthenticator"}),"Install kubectl & aws-iam_authenticator")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#configure-kubectl"}),"Configure ",Object(n.b)("em",{parentName:"a"},"kubectl")))))))),Object(n.b)("h2",{id:"eks-setup-process"},"EKS Setup Process"),Object(n.b)("p",null,"EKS will setup and manage our Kubernetes clusters:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"This will create K8s master in high availability"),Object(n.b)("li",{parentName:"ul"},"Etcd in high availability"),Object(n.b)("li",{parentName:"ul"},"IAM plugin setup"),Object(n.b)("li",{parentName:"ul"},"CA setup (for TLS)"),Object(n.b)("li",{parentName:"ul"},"Auto scaling done"),Object(n.b)("li",{parentName:"ul"},"Load Balancers done (NLB and ELB)")),Object(n.b)("p",null,"In short, you will get an EKS control plane and you'll just need to setup the worker nodes in the availability zones."),Object(n.b)("p",null,"The from the laptop, you can use kubectl to talk to AWS."),Object(n.b)("p",null,"There is also deep integration with AWS:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"API calls can be audited in CloudTrail"),Object(n.b)("li",{parentName:"ul"},"Authetication through IAM while authorization through RBAC."),Object(n.b)("li",{parentName:"ul"},"CloudFormation to manage clusteres"),Object(n.b)("li",{parentName:"ul"},"Customize AMI"),Object(n.b)("li",{parentName:"ul"},"Load Balancers, EBS Volumes, EFS, etc..."),Object(n.b)("li",{parentName:"ul"},"Container registies on ECR"),Object(n.b)("li",{parentName:"ul"},"Networking is handled with a per-pod IP address with attached ENI")),Object(n.b)("h3",{id:"eks-use-cases"},"EKS Use cases"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Can create a cluster easily"),Object(n.b)("li",{parentName:"ul"},"Microservices in containers"),Object(n.b)("li",{parentName:"ul"},"Paas/Website"),Object(n.b)("li",{parentName:"ul"},"Migrate from on-prem to cloud"),Object(n.b)("li",{parentName:"ul"},"ML cluster (support for GPU instances)")),Object(n.b)("h3",{id:"the-course"},"The Course"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Deploy EKS cluster using CF"),Object(n.b)("li",{parentName:"ul"},"Scale Kubernetes cluster"),Object(n.b)("li",{parentName:"ul"},"Setup ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl")," properly"),Object(n.b)("li",{parentName:"ul"},"Learn how EKS works under the hood"),Object(n.b)("li",{parentName:"ul"},"Setup admin using Kubernetes dashboard"),Object(n.b)("li",{parentName:"ul"},"Deploy stateless app on EKS and expose it with public ELB"),Object(n.b)("li",{parentName:"ul"},"Deploy stateful app on EKS and bind it with EBS volumes"),Object(n.b)("li",{parentName:"ul"},"Deploy stateful app (like WordPress) with EFS"),Object(n.b)("li",{parentName:"ul"},"Manage Kubernetes cluster using AWS CLI and ",Object(n.b)("inlineCode",{parentName:"li"},"eksctl")," CLI")),Object(n.b)("h3",{id:"eks-architecture"},"EKS Architecture"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"3 AZs"),Object(n.b)("li",{parentName:"ul"},"Master node in each"),Object(n.b)("li",{parentName:"ul"},"Etcd in each"),Object(n.b)("li",{parentName:"ul"},"K8s worker nodes")),Object(n.b)("p",null,Object(n.b)("img",{alt:"EKS Architecture",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548135634/eks-course/Screen_Shot_2019-01-22_at_4.39.24_pm.png"})),Object(n.b)("p",null,"EKS itself will manage all the load and master nodes and etcd as needed."),Object(n.b)("h3",{id:"basic-eks-setup"},"Basic EKS Setup"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Basic setup",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548135634/eks-course/Screen_Shot_2019-01-22_at_4.39.24_pm.png"})),Object(n.b)("h2",{id:"setup-for-the-eks-cluster"},"Setup for the EKS cluster"),Object(n.b)("h2",{id:"iam-user-roles"},"IAM User roles"),Object(n.b)("h4",{id:"iam-user-and-permissions"},"IAM user and permissions"),Object(n.b)("p",null,"To be able to run through this course your IAM user needs to have certain privileges to e.g. create all the required resources and objects. According AWS Best Practices you should ",Object(n.b)("em",{parentName:"p"},"never")," use your root account for working with AWS services. E.g. to demonstrate the Hands-On lectures, the user ",Object(n.b)("em",{parentName:"p"},"eks-course")," has been used."),Object(n.b)("p",null,"There are 2 attempts to follow:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'Provide admin access\nlogin with an admin of your AWS account\ngo to "IAM" => "users" => click on your user => "Permissions" => "Add permission" => then search for ',Object(n.b)("em",{parentName:"li"},"AdministratorAccess")," and attach this policy\nBasically your user just requires ",Object(n.b)("em",{parentName:"li"},"one")," policy being attached")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"AdministratorAccess")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Provide a dedicated list of privileges/policies\nto cover all the required privileges, first you have to create additional policies\nEKS-Admin-policy:")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["eks:*"],\n      "Resource": "*"\n    }\n  ]\n}\n')),Object(n.b)("p",null,"CloudFormation-Admin-policy:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-javascript"}),'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["cloudformation:*"],\n      "Resource": "*"\n    }\n  ]\n}\n')),Object(n.b)("p",null,"Finally, assign the following policies to your IAM user you are going to use throughout the course:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"AmazonEC2FullAccess"),Object(n.b)("li",{parentName:"ul"},"IAMFullAccess"),Object(n.b)("li",{parentName:"ul"},"AmazonVPCFullAccess"),Object(n.b)("li",{parentName:"ul"},"CloudFormation-Admin-policy"),Object(n.b)("li",{parentName:"ul"},"EKS-Admin-policy\nwhere the last 2 policies are the ones you created above")),Object(n.b)("h3",{id:"create-iam-role"},"Create IAM role"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"open ",Object(n.b)("inlineCode",{parentName:"li"},"https://console.aws.amazon.com/iam/")," and choose ",Object(n.b)("em",{parentName:"li"},"Roles")," => ",Object(n.b)("em",{parentName:"li"},"create role")),Object(n.b)("li",{parentName:"ul"},"choose ",Object(n.b)("em",{parentName:"li"},"EKS")," service followed by ",Object(n.b)("em",{parentName:"li"},"Allows Amazon EKS to manage your clusters on your behalf")),Object(n.b)("li",{parentName:"ul"},"choose ",Object(n.b)("em",{parentName:"li"},"Next: Permissions")),Object(n.b)("li",{parentName:"ul"},"click ",Object(n.b)("em",{parentName:"li"},"Next: Review")),Object(n.b)("li",{parentName:"ul"},"enter a ",Object(n.b)("em",{parentName:"li"},"unique")," Role name, ",Object(n.b)("em",{parentName:"li"},"EKS-course-role")," and click ",Object(n.b)("em",{parentName:"li"},Object(n.b)("em",{parentName:"em"},"Create Role")))),Object(n.b)("h3",{id:"create-keypair"},"Create keypair"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"open EC2 dashboard ",Object(n.b)("inlineCode",{parentName:"li"},"https://console.aws.amazon.com/ec2")),Object(n.b)("li",{parentName:"ul"},"click ",Object(n.b)("em",{parentName:"li"},"KeyPairs"),' in left navigation bar under section "Network&Security"'),Object(n.b)("li",{parentName:"ul"},"click ",Object(n.b)("em",{parentName:"li"},"Create Key Pair")),Object(n.b)("li",{parentName:"ul"},"provide name for keypair, ",Object(n.b)("em",{parentName:"li"},"eks-course")," and click ",Object(n.b)("em",{parentName:"li"},Object(n.b)("em",{parentName:"em"},"Create"))),Object(n.b)("li",{parentName:"ul"},"!! the keypair will be downloaded immediately => file ",Object(n.b)("em",{parentName:"li"},"eks-course.pem")," !!")),Object(n.b)("h3",{id:"create-api-access-key-secret"},"Create API Access key/-secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"create key+secret via AWS console")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-bash"}),"AWS-console => IAM => Users => <your user> => tab _Security credentials_ => button _Create access key_\n")),Object(n.b)("h2",{id:"create-base-aws-infrastructure"},"Create base AWS infrastructure"),Object(n.b)("h3",{id:"create-vpc-subnets-and-security-group-for-your-k8s-cluster"},"Create VPC, subnets and security group for your K8s cluster"),Object(n.b)("p",null,Object(n.b)("img",{alt:"AWS EKS Cluster setup",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548137228/eks-course/Screen_Shot_2019-01-22_at_5.06.52_pm.png"})),Object(n.b)("p",null,"To create a VPC there is a prepared CloudFormation template to use. It creates a VPC including 3 Subnets\nAt the moment EKS is only available in the following 2 regions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"US West (Oregon), ",Object(n.b)("em",{parentName:"li"},"us-west-2")),Object(n.b)("li",{parentName:"ul"},"US East (N.Virginia), ",Object(n.b)("em",{parentName:"li"},"us-east-1"))),Object(n.b)("h4",{id:"working-on-the-console"},"Working on the console"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"open ",Object(n.b)("inlineCode",{parentName:"li"},"https://console.aws.amazon.com/cloudformation/")," and select one of the above mentioned regions"),Object(n.b)("li",{parentName:"ul"},"click ",Object(n.b)("em",{parentName:"li"},"Create Stack")),Object(n.b)("li",{parentName:"ul"},"select ",Object(n.b)("em",{parentName:"li"},"Upload a template to Amazon S3")," , click ",Object(n.b)("em",{parentName:"li"},Object(n.b)("em",{parentName:"em"},"Upload file"))," and select ",Object(n.b)("inlineCode",{parentName:"li"},"eks-course-vpc.yaml")),Object(n.b)("li",{parentName:"ul"},"click ",Object(n.b)("em",{parentName:"li"},"Next")),Object(n.b)("li",{parentName:"ul"},"provide data in the ",Object(n.b)("em",{parentName:"li"},"Specify Details")," overview:")),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-yaml"}),"# eks-course-vpc.yaml\n---\nAWSTemplateFormatVersion: '2010-09-09'\nDescription: 'AWS EKS course'\n\nParameters:\n  VpcBlock:\n    Type: String\n    Default: 192.168.0.0/16\n    Description: CIDR range for VPC\n\n  Subnet01Block:\n    Type: String\n    Default: 192.168.64.0/18\n    Description: CIDR for first subnet within VPC\n\n  Subnet02Block:\n    Type: String\n    Default: 192.168.128.0/18\n    Description: CIDR for second subnet within VPC\n\n  Subnet03Block:\n    Type: String\n    Default: 192.168.192.0/18\n    Description: CIDR for third subnet within VPC\n\nResources:\n  VPC:\n    Type: AWS::EC2::VPC\n    Properties:\n      CidrBlock: !Ref VpcBlock\n      EnableDnsSupport: true\n      EnableDnsHostnames: true\n      Tags:\n        - Key: Name\n          Value: !Sub '${AWS::StackName}-VPC'\n\n  InternetGateway:\n    Type: 'AWS::EC2::InternetGateway'\n\n  VPCGatewayAttachment:\n    Type: 'AWS::EC2::VPCGatewayAttachment'\n    Properties:\n      InternetGatewayId: !Ref InternetGateway\n      VpcId: !Ref VPC\n\n  RouteTable:\n    Type: AWS::EC2::RouteTable\n    Properties:\n      VpcId: !Ref VPC\n      Tags:\n        - Key: Name\n          Value: Public Subnets\n        - Key: Network\n          Value: Public\n\n  Route:\n    DependsOn: VPCGatewayAttachment\n    Type: AWS::EC2::Route\n    Properties:\n      RouteTableId: !Ref RouteTable\n      DestinationCidrBlock: 0.0.0.0/0\n      GatewayId: !Ref InternetGateway\n\n  Subnet01:\n    Type: AWS::EC2::Subnet\n    Properties:\n      AvailabilityZone:\n        Fn::Select:\n          - '0'\n          - Fn::GetAZs:\n              Ref: AWS::Region\n      CidrBlock:\n        Ref: Subnet01Block\n      VpcId:\n        Ref: VPC\n      Tags:\n        - Key: Name\n          Value: !Sub '${AWS::StackName}-Subnet1'\n\n  Subnet02:\n    Type: AWS::EC2::Subnet\n    Properties:\n      AvailabilityZone:\n        Fn::Select:\n          - '1'\n          - Fn::GetAZs:\n              Ref: AWS::Region\n      CidrBlock:\n        Ref: Subnet02Block\n      VpcId:\n        Ref: VPC\n      Tags:\n        - Key: Name\n          Value: !Sub '${AWS::StackName}-Subnet2'\n\n  Subnet03:\n    Type: AWS::EC2::Subnet\n\n    Properties:\n      AvailabilityZone:\n        Fn::Select:\n          - '2'\n          - Fn::GetAZs:\n              Ref: AWS::Region\n      CidrBlock:\n        Ref: Subnet03Block\n      VpcId:\n        Ref: VPC\n      Tags:\n        - Key: Name\n          Value: !Sub '${AWS::StackName}-Subnet3'\n\n  Subnet01RouteTableAssociation:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref Subnet01\n      RouteTableId: !Ref RouteTable\n\n  Subnet02RouteTableAssociation:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref Subnet02\n      RouteTableId: !Ref RouteTable\n\n  Subnet03RouteTableAssociation:\n    Type: AWS::EC2::SubnetRouteTableAssociation\n    Properties:\n      SubnetId: !Ref Subnet03\n      RouteTableId: !Ref RouteTable\n\n  ControlPlaneSecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: Cluster communication with worker nodes\n      VpcId: !Ref VPC\n\nOutputs:\n  SubnetIds:\n    Description: Your subnets\n    Value: !Join [',', [!Ref Subnet01, !Ref Subnet02, !Ref Subnet03]]\n\n  SecurityGroups:\n    Description: SecGroup for communication betw controlplane and workernodes\n    Value: !Join [',', [!Ref ControlPlaneSecurityGroup]]\n\n  VpcId:\n    Description: The VPC Id\n    Value: !Ref VPC\n")),Object(n.b)("h4",{id:"setting-stack-name"},"Setting stack name"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Stack name : set stack name ",Object(n.b)("em",{parentName:"li"},"EKS-course-stack")),Object(n.b)("li",{parentName:"ul"},"VPC Block : set CIDR range for your VPC, or leave the default from the CloudFormation template"),Object(n.b)("li",{parentName:"ul"},"Subnet01Block : set CIDR range for this subnet, or leave the default from the CloudFormation template"),Object(n.b)("li",{parentName:"ul"},"Subnet02Block : set CIDR range for this subnet, or leave the default from the CloudFormation template"),Object(n.b)("li",{parentName:"ul"},"Subnet03Block : set CIDR range for this subnet, or leave the default from the CloudFormation template")),Object(n.b)("h4",{id:"continuing-on"},"Continuing on"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("em",{parentName:"li"},"Next")),Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("em",{parentName:"li"},"Create")),Object(n.b)("li",{parentName:"ul"},"Observe the progress of the stack creation. After the stack is created, open tab ",Object(n.b)("em",{parentName:"li"},"Outputs")," and record the ",Object(n.b)("em",{parentName:"li"},"VPC-ID"),", ",Object(n.b)("em",{parentName:"li"},"SecurityGroup")," and the ",Object(n.b)("em",{parentName:"li"},"Subnet_IDs")," for all 3 subnets. You'll need those at worker launch time.")),Object(n.b)("h2",{id:"creating-the-eks-control-plane"},"Creating the EKS control plane"),Object(n.b)("h3",{id:"via-cli"},"Via CLI"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"aws eks create-cluster --name prod --role-arn arn:aws:iam::012345678910:role/eks-service-role-AWSServiceRoleForAmazonEKS-J7ONKE3BQ4PI --resources-vpc-config subnetIds=subnet-6782e71e,subnet-e7e761ac,securityGroupIds=sg-6979fe18\n")),Object(n.b)("h3",{id:"via-gui"},"Via GUI"),Object(n.b)("p",null,Object(n.b)("img",{alt:"EKS Control Plane",src:"https://res.cloudinary.com/gitgoodclub/image/upload/v1548137849/eks-course/Screen_Shot_2019-01-22_at_5.17.00_pm.png"})),Object(n.b)("p",null,"Kubernetes API server is a AWS service, hence it doesn't need dedicated EC2 instances to run."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the EKS overview page in AWS Management console, ",Object(n.b)("inlineCode",{parentName:"li"},"https://console.aws.amazon.com/eks/home#/clusters")," and click ",Object(n.b)("em",{parentName:"li"},"Create Cluster"),".")),Object(n.b)("p",null,"Populate the following fields:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Cluster name : enter a unique name, ",Object(n.b)("em",{parentName:"li"},"EKS-course-cluster")),Object(n.b)("li",{parentName:"ul"},"Kubernetes version : by default the latest available version is preselected"),Object(n.b)("li",{parentName:"ul"},"Role ARN : select the IAM Role you created in the first Hands-On lesson ",Object(n.b)("em",{parentName:"li"},"Part I: cover prerequisites")),Object(n.b)("li",{parentName:"ul"},"VPC : select the VPC-ID from the dropdown box which was created in the first Hands-On lesson ",Object(n.b)("em",{parentName:"li"},"Part II: create base AWS infrastructure")),Object(n.b)("li",{parentName:"ul"},"Subnets : provide the comma separated Subnet-IDs you recorded in the previous step"),Object(n.b)("li",{parentName:"ul"},"SecurityGroup : select the security group (it has name ",Object(n.b)("em",{parentName:"li"},"ControlPlaneSecurityGroup")," ) which has been created in Hands-On ",Object(n.b)("em",{parentName:"li"},"Part II: create base AWS infrastructure"))),Object(n.b)("p",null,"Then for creation:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"click ",Object(n.b)("em",{parentName:"li"},"Create")),Object(n.b)("li",{parentName:"ul"},"on the ",Object(n.b)("em",{parentName:"li"},"Clusters")," overview page, observe field ",Object(n.b)("em",{parentName:"li"},Object(n.b)("em",{parentName:"em"},"Status"))," until cluster creation is finished.")),Object(n.b)("p",null,"Click on your clustername, and record the ",Object(n.b)("em",{parentName:"p"},"API server endpoint")," and ",Object(n.b)("em",{parentName:"p"},"Certificate authority")," values to configure ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl")," in the next Hands-On ",Object(n.b)("em",{parentName:"p"},"Part IV: install & configure kubectl"),"."),Object(n.b)("h2",{id:"setting-up-local-kubectl-for-eks"},"Setting up local kubectl for EKS"),Object(n.b)("h3",{id:"recap-on-the-kubectl-setup"},"Recap on the kubectl setup"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"kubectl")," relies on the ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl config file")),Object(n.b)("li",{parentName:"ul"},"That relies on the EKS endpoint and User authentication"),Object(n.b)("li",{parentName:"ul"},"Use auth depends on ",Object(n.b)("inlineCode",{parentName:"li"},"aws-iam-authenticator")," executable"),Object(n.b)("li",{parentName:"ul"},"This generates an auth token based on the ",Object(n.b)("inlineCode",{parentName:"li"},"aws credentials file"))),Object(n.b)("h3",{id:"install-kubectl--aws-iam_authenticator"},"Install kubectl & aws-iam_authenticator"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"kubectl"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"on RH based Linux: ",Object(n.b)("inlineCode",{parentName:"li"},"sudo dnf install kubernetes-client"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"check: ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl version --short --client")))),Object(n.b)("li",{parentName:"ul"},"on Windows, open a terminal emulator, preferrably MobaXterm:")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"curl -k -# -o kubectl.exe https://amazon-eks.s3-us-west-2.amazonaws.com/1.10.3/2018-07-26/bin/windows/amd64/kubectl.exe\nchmod +x kubectl.exe\nmkdir $HOME/bin\nmv kubectl.exe $HOME/bin\necho 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc\nsource .bashrc\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"check: ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl.exe version --short --client")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"aws-iam-authenticator"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"on Linux:")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"curl -o aws-iam-authenticator https://amazon-eks.s3-us-west-2.amazonaws.com/1.10.3/2018-07-26/bin/linux/amd64/aws-iam-authenticator\nchmod +x ./aws-iam-authenticator\ncp ./aws-iam-authenticator /usr/local/bin/\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Test: ",Object(n.b)("inlineCode",{parentName:"p"},"aws-iam-authenticator help"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"on Windows, open a terminal emulator, preferrably MobaXterm:"))),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"curl -k -# -o aws-iam-authenticator.exe  https://amazon-eks.s3-us-west-2.amazonaws.com/1.10.3/2018-07-26/bin/windows/amd64/aws-iam-authenticator.exe\nchmod +x aws-iam-authenticator.exe\nmv aws-iam-authenticator.exe $HOME/bin\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Test: ",Object(n.b)("inlineCode",{parentName:"li"},"aws-iam-authenticator.exe help")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"aws credentials (ACCESS KEY+SECRET)\nnow we have to provide the Access key+secret from the first lesson ",Object(n.b)("em",{parentName:"p"},"Part I : covering prerequisites")," and put them into the credentials template."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"* populate aws credentials file\n  copy the provided file named _credentials_ to\n  * WINDOWS cygwin: ```mkdir $HOMEPATH/.aws && vi $HOMEPATH/.aws/credentials```\n  * Linux: ```~/.aws/credentials```\n  and set the properties _aws_access_key_id_ and _aws_secret_access_key_\n")))),Object(n.b)("h3",{id:"configure-kubectl"},"Configure ",Object(n.b)("em",{parentName:"h3"},"kubectl")),Object(n.b)("p",null,"in this step we are creating a configuration file for the binary ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl"),", which is the main tool to interact with Kubernetes later on."),Object(n.b)("p",null,"Use template file ",Object(n.b)("em",{parentName:"p"},"kube-config-eks")," and copy it to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Linux: ",Object(n.b)("inlineCode",{parentName:"li"},"~/.kube/kube-config-eks")),Object(n.b)("li",{parentName:"ul"},"Windows (cygwin): ",Object(n.b)("inlineCode",{parentName:"li"},"mkdir $HOMEPATH/.kube && vi $HOMEPATH/.kube/kube-config-eks"))),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nclusters:\n  - cluster:\n      server: <endpoint-url>\n      certificate-authority-data: <base64-encoded-ca-cert>\n    name: kubernetes\ncontexts:\n  - context:\n      cluster: kubernetes\n      user: aws\n    name: aws\ncurrent-context: aws\nkind: Config\npreferences: {}\nusers:\n  - name: aws\n    user:\n      exec:\n        apiVersion: client.authentication.k8s.io/v1alpha1\n        command: aws-iam-authenticator\n        args:\n          - 'token'\n          - '-i'\n          - 'EKS-course-cluster'\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"edit file ",Object(n.b)("inlineCode",{parentName:"p"},"kube-config-eks")," and replace ",Object(n.b)("em",{parentName:"p"},"endpoint-url"),", ",Object(n.b)("em",{parentName:"p"},"base64-encoded-ca-cert")," by the values you recorded in the Hands-On lesson 3 ",Object(n.b)("em",{parentName:"p"},"Part III: create the K8s control plane"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Linux : ",Object(n.b)("inlineCode",{parentName:"p"},"export KUBECONFIG=~/.kube/kube-config-eks"),"\nWindows : ",Object(n.b)("inlineCode",{parentName:"p"},"export KUBECONFIG=$HOMEPATH/.kube/kube-config-eks"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Test connectivity and access:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"#>kubectl get svc\nNAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE\nkubernetes   ClusterIP   xxxxxxxxx    <none>        443/TCP   4m\n")),Object(n.b)("p",{parentName:"li"},"command to check the config for kubectl: ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl config view")))),Object(n.b)("p",null,"Now you successfully talked to the K8s control plane on AWS"))}o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"manual/Kubernetes/AWS-EKS-Starter.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---manual-kubernetes-aws-eks-starter-md-506ad7ad5fb42ccf6a30.js.map