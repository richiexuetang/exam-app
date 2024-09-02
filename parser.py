import html_to_json
import pyperclip

html_string = """  <li><p>A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?</p>
  <ul>
  <li>A. Least Privilege.</li>
  <li>B. Pilot Light.</li>
  <li>C. Fault Tolerance.</li>
  <li>D. Multi-threading.</li>
  </ul>
  C
  </li>
  <li><p>You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?</p>
  <ul>
  <li>A. All up-front reservation.</li>
  <li>B. All reserved instance payment options provide the same discount level.</li>
  <li>C. Partial up-front reservation.</li>
  <li>D. No up-front reservation.</li>
  </li>
  </ul>
  A
  </li>
  <li><p>What features does AWS offer to help protect your data in the Cloud? (Choose TWO)</p>
  <ul>
  <li>A. Access control.</li>
  <li>B. Physical MFA devices.</li>
  <li>C. Data encryption.</li>
  <li>D. Unlimited storage.</li>
  <li>E. Load balancing.
  </li>
  </ul>
  A, C
  </li>
  <li><p>An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?</p>
  <ul>
  <li>A. 3 hours for the Linux instance and 5 hours for the CentOS instance.</li>
  <li>B. 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.</li>
  <li>C. 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.</li>
  <li>D. 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.
  </li>
  </ul>
  C
  </li>
  <li><p>What is the AWS Support feature that allows customers to manage support cases programmatically?</p>
  <ul>
  <li>A. AWS Trusted Advisor.</li>
  <li>B. AWS Operations Support.</li>
  <li>C. AWS Support API.</li>
  <li>D. AWS Personal Health Dashboard.

  </li>
  </ul>
  C
  </li>
  <li><p>Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)</p>
  <ul>
  <li>A. AWS CLI.</li>
  <li>B. AWS Security Groups.</li>
  <li>C. AWS SDKs.</li>
  <li>D. AWS Network Access Control Lists.</li>
  <li>E. AWS CodeCommit.</li>
  </ul>
  A, C
  </li>
  <li><p>Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)</p>
  <ul>
  <li>A. AWS Resource Groups.</li>
  <li>B. IAM Policies.</li>
  <li>C. IAM Roles.</li>
  <li>D. IAM Users.</li>
  <li>E. AWS Organizations.
  </li>
  </ul>
  C, D
  </li>
  <li><p>Which of the following Amazon RDS features facilitates offloading of database read activity?</p>
  <ul>
  <li>A. Database Snapshots.</li>
  <li>B. Multi-AZ Deployments.</li>
  <li>C. Automated Backups.</li>
  <li>D. Read Replicas.
  </li>
  </ul>
  D
  </li>
  <li><p>How does AWS notify customers about security and privacy events pertaining to AWS services?</p>
  <ul>
  <li>A. Using the AWS ACM service.</li>
  <li>B. Using Security Bulletins.</li>
  <li>C. Using the AWS Management Console.</li>
  <li>D. Using Compliance Resources.

  </li>
  </ul>
  B
  </li>
  <li><p>Which IAM entity can best be used to grant temporary access to your AWS resources?</p>
  <ul>
  <li>A. IAM Users.</li>
  <li>B. Key Pair.</li>
  <li>C. IAM Roles.</li>
  <li>D. IAM Groups.</li>
  </ul>
    C
  </li>
  <li><p>A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?</p>
  <ul>
  <li>A. AWS Global Accelerator.</li>
  <li>B. AWS Application Load Balancer (ALB).</li>
  <li>C. Amazon CloudFront.</li>
  <li>D. Transit VPC.</li>
  </ul>

    B

  </li>
  <li><p>Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?</p>
  <ul>
  <li>A. Use Software test automation tools.</li>
  <li>B. Use AWS CodeDeploy to build and automate your AWS environment.</li>
  <li>C. Use code to provision and operate your AWS infrastructure.</li>
  <li>D. Migrate all of your applications to a dedicated host.</li>
  </ul>

    C

  </li>
  <li><p>A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?</p>
  <ul>
  <li>A. Restrict any API call made through SDKs or CLI.</li>
  <li>B. Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.</li>
  <li>C. Require Multi-Factor Authentication (MFA) for all IAM User access.</li>
  <li>D. Set up two login passwords.</li>
  </ul>

    C

  </li>
  <li><p>Which AWS Service offers volume discounts based on usage?</p>
  <ul>
  <li>A. Amazon VPC.</li>
  <li>B. Amazon S3.</li>
  <li>C. Amazon Lightsail.</li>
  <li>D. AWS Cost Explorer.</li>
  </ul>

    B

  </li>
  <li><p>Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)</p>
  <ul>
  <li>A. The AWS Region's security level.</li>
  <li>B. Data sovereignty.</li>
  <li>C. Cost.</li>
  <li>D. The planned number of VPCs.</li>
  <li>E. Geographic proximity to the company&#39;s location.</li>
  </ul>

    B, C

  </li>
  <li><p>You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?</p>
  <ul>
  <li>A. Amazon EFS.</li>
  <li>B. Amazon Neptune.</li>
  <li>C. Amazon ElastiCache.</li>
  <li>D. DAX.</li>
  </ul>

    C

  </li>
  <li><p>What are the advantages of using Auto Scaling Groups for EC2 instances?</p>
  <ul>
  <li>A. Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.</li>
  <li>B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.</li>
  <li>C. Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.</li>
  <li>D. Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.</li>
  </ul>

    B

  </li>
  <li><p>The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?</p>
  <ul>
  <li>A. AWS helps customers invest more in capital expenditures.</li>
  <li>B. AWS automates all infrastructure operations, so customers save more on human resources costs.</li>
  <li>C. AWS continues to lower the cost of cloud computing for its customers.</li>
  <li>D. AWS secures AWS resources at no additional charge.</li>
  </ul>

    C

  </li>
  <li><p>Which of the following are examples of the customer's responsibility to implement “security IN the cloud”? (Choose TWO)</p>
  <ul>
  <li>A. Building a schema for an application.</li>
  <li>B. Replacing physical hardware.</li>
  <li>C. Creating a new hypervisor.</li>
  <li>D. Patch management of the underlying infrastructure.</li>
  <li>E. File system encryption.</li>
  </ul>

    A, E

  </li>
  <li><p>Which of the following is a type of MFA device that customers can use to protect their AWS resources?</p>
  <ul>
  <li>A. AWS CloudHSM.</li>
  <li>B. U2F Security Key.</li>
  <li>C. AWS Access Keys.</li>
  <li>D. AWS Key Pair.</li>
  </ul>

    B

  </li>
  <li><p>A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?</p>
  <ul>
  <li>A. Amazon SNS.</li>
  <li>B. AWS Elastic Beanstalk.</li>
  <li>C. AWS Systems Manager.</li>
  <li>D. AWS Trusted Advisor.</li>
  </ul>

    B

  </li>
  <li><p>Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)</p>
  <ul>
  <li>A. The amount of time the instances will be running.</li>
  <li>B. Number of security groups.</li>
  <li>C. Allocated Elastic IP Addresses.</li>
  <li>D. Number of Hosted Zones.</li>
  <li>E. Number of instances.</li>
  </ul>

    B, D

  </li>
  <li><p>Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?</p>
  <ul>
  <li>A. AWS Data Pipeline.</li>
  <li>B. AWS Storage Gateway.</li>
  <li>C. Amazon Aurora.</li>
  <li>D. Amazon EFS.</li>
  </ul>

    B

  </li>
  <li><p>A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?</p>
  <ul>
  <li>A. Amazon Simple Storage Service.</li>
  <li>B. Amazon Elastic Block Store.</li>
  <li>C. Amazon Elastic Container Service.</li>
  <li>D. AWS Storage Gateway.</li>
  </ul>

    A

  </li>
  <li><p>You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?</p>
  <ul>
  <li>A. EBS and S3 are accessible only to the root account owner.</li>
  <li>B. The systems administrator must contact AWS Support first to activate his new IAM account.</li>
  <li>C. There is not enough space in S3 to store the snapshots.</li>
  <li>D. There is a non-explicit deny to all new users.</li>
  </ul>

    D

  </li>
  <li><p>An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?</p>
  <ul>
  <li>A. AWS CloudTrail.</li>
  <li>B. Amazon CloudFront.</li>
  <li>C. AWS CloudFormation.</li>
  <li>D. Amazon CloudWatch.</li>
  </ul>

    A

  </li>
  <li><p>Which of the below options is true of Amazon Cloud Directory?</p>
  <ul>
  <li>A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.</li>
  <li>B. Amazon Cloud Directory enables the analysis of video and data streams in real time.</li>
  <li>C. Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.</li>
  <li>D. Amazon Cloud Directory allows for registration and management of domain names.</li>
  </ul>

    A

  </li>
  <li><p>A user has opened a &quot;Production System Down&quot; support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?</p>
  <ul>
  <li>A. 12 hours.</li>
  <li>B. 15 minutes.</li>
  <li>C. 24 hours.</li>
  <li>D. One hour.</li>
  </ul>

    D

  </li>
  <li><p>Which of the below options is a best practice for making your application on AWS highly available?</p>
  <ul>
  <li>A. Deploy the application to at least two Availability Zones.</li>
  <li>B. Use Elastic Load Balancing (ELB) across multiple AWS Regions.</li>
  <li>C. Deploy the application code on at least two servers in the same Availability Zone.</li>
  <li>D. Rewrite the application code to handle all incoming requests.</li>
  </ul>

    A

  </li>
  <li><p>Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)</p>
  <ul>
  <li>A. Labor and IT costs.</li>
  <li>B. Cooling and power consumption.</li>
  <li>C. Amazon EBS computing power.</li>
  <li>D. Software architecture.</li>
  <li>E. Software compatibility.</li>
  </ul>

    A, B

  </li>
  <li><p>Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?</p>
  <ul>
  <li>A. AWS Basic Support.</li>
  <li>B. AWS Developer Support.</li>
  <li>C. AWS Business Support.</li>
  <li>D. AWS Enterprise Support.</li>
  </ul>

    D

  </li>
  <li><p>Which of the following AWS offerings are serverless services? (Choose TWO)</p>
  <ul>
  <li>A. Amazon EC2.</li>
  <li>B. AWS Lambda.</li>
  <li>C. Amazon DynamoDB.</li>
  <li>D. Amazon EMR.</li>
  <li>E. Amazon RDS.</li>
  </ul>

    B, C

  </li>
  <li><p>Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?</p>
  <ul>
  <li>A. Amazon GuardDuty.</li>
  <li>B. AWS ACM.</li>
  <li>C. Amazon Detective.</li>
  <li>D. AWS WAF.</li>
  </ul>

    B

  </li>
  <li><p>Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?</p>
  <ul>
  <li>A. AWS Config.</li>
  <li>B. AWS OpsWorks.</li>
  <li>C. AutoScaling.</li>
  <li>D. AWS CloudFormation.</li>
  </ul>

    B

  </li>
  <li><p>A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?</p>
  <ul>
  <li>A. Amazon EBS.</li>
  <li>B. Amazon EFS.</li>
  <li>C. Amazon S3.</li>
  <li>D. Amazon Instance Store.</li>
  </ul>

    C

  </li>
  <li><p>Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?</p>
  <ul>
  <li>A. AWS WAF.</li>
  <li>B. Amazon CloudWatch.</li>
  <li>C. AWS Cloud9.</li>
  <li>D. AWS CloudTrail.</li>
  </ul>

    B

  </li>
  <li><p>A company is migrating a web application to AWS. The application's compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?</p>
  <ul>
  <li>A. On-demand Instances.</li>
  <li>B. Dedicated Hosts.</li>
  <li>C. Spot Instances.</li>
  <li>D. Reserved Instances.</li>
  </ul>

    D

  </li>
  <li><p>A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?</p>
  <ul>
  <li>A. Create an IAM role and attach a policy with Amazon DynamoDB access permissions.</li>
  <li>B. Create an IAM role and attach a policy with Administrator access permissions.</li>
  <li>C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.</li>
  <li>D. Create an IAM user and attach a policy with Administrator access permissions.</li>
  </ul>

    C

  </li>
  <li><p>When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?</p>
  <ul>
  <li>A. Generate new IAM access keys every time you delegate permissions.</li>
  <li>B. Store the required AWS credentials directly within the application code.</li>
  <li>C. Use temporary security credentials (IAM roles) instead of long-term access keys.</li>
  <li>D. Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.</li>
  </ul>

    C

  </li>
  <li><p>Which of the following will help AWS customers save on costs when migrating their workloads to AWS?</p>
  <ul>
  <li>A. Use servers instead of managed services.</li>
  <li>B. Use existing third-party software licenses on AWS.</li>
  <li>C. Migrate production workloads to AWS edge locations instead of AWS Regions.</li>
  <li>D. Use AWS Outposts to run all workloads in a cost-optimized environment.</li>
  </ul>

    B

  </li>
  <li><p>An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?</p>
  <ul>
  <li>A. Amazon SQS.</li>
  <li>B. Virtual Private Gateway.</li>
  <li>C. AWS Artifact.</li>
  <li>D. Amazon CloudFront.</li>
  </ul>

    A

  </li>
  <li><p>Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)</p>
  <ul>
  <li>A. Amazon Connect.</li>
  <li>B. AWS CLI.</li>
  <li>C. AWS Identity and Access Management (IAM).</li>
  <li>D. Amazon SNS.</li>
  <li>E. Amazon Virtual Private Cloud.</li>
  </ul>

    B, C

  </li>
  <li><p>According to best practices, which of the below options is best suited for processing a large number of binary files?</p>
  <ul>
  <li>A. Vertically scaling EC2 instances.</li>
  <li>B. Running RDS instances in parallel.</li>
  <li>C. Vertically scaling RDS instances.</li>
  <li>D. Running EC2 instances in parallel.</li>
  </ul>

    D

  </li>
  <li><p>A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?</p>
  <ul>
  <li>A. AWS Cost Explorer.</li>
  <li>B. AWS Pricing Calculator.</li>
  <li>C. AWS Budgets.</li>
  <li>D. AWS Cost &amp; Usage Report.</li>
  </ul>

    B

  </li>
  <li><p>What should you do if you see resources, which you don't remember creating, in the AWS Management Console? (Choose TWO)</p>
  <ul>
  <li>A. Stop all running services and open an investigation.</li>
  <li>B. Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.</li>
  <li>C. Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.</li>
  <li>D. Open an investigation and delete any potentially compromised IAM users.</li>
  <li>E. Change your AWS root account password and the passwords of any IAM users.</li>
  </ul>

    D, E

  </li>
  <li><p>A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?</p>
  <ul>
  <li>A. Elastic coupling.</li>
  <li>B. Loosely coupling.</li>
  <li>C. Scalable coupling.</li>
  <li>D. Tightly coupling.</li>
  </ul>

    B

  </li>
  <li><p>Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?</p>
  <ul>
  <li>A. Amazon Elastic File System.</li>
  <li>B. Amazon Simple Storage Service.</li>
  <li>C. Amazon Elastic Block Store.</li>
  <li>D. AWS Storage Gateway.</li>
  </ul>

    A

  </li>
  <li><p>Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?</p>
  <ul>
  <li>A. Create private connection to your data center.</li>
  <li>B. Achieve global high availability.</li>
  <li>C. Automate the process of provisioning new compute resources.</li>
  <li>D. Make synchronous replication of your data possible.</li>
  </ul>

    D

  </li>
  <li><p>Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)</p>
  <ul>
  <li>A. Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.</li>
  <li>B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.</li>
  <li>C. Lambda is AWS' proprietary programming language for microservices.</li>
  <li>D. Lambda doesn't support programming languages; it is a serverless compute service.</li>
  <li>E. Lambda can support any programming language using an API.</li>
  </ul>

    B, E

  </li>
  <li><p>What are the capabilities of AWS X-Ray? (Choose TWO)</p>
  <ul>
  <li>A. Automatically decouples application components.</li>
  <li>B. Facilitates tracking of user requests to identify application issues.</li>
  <li>C. Helps improve application performance.</li>
  <li>D. Deploys applications to Amazon EC2 instances.</li>
  <li>E. Deploys applications to on-premises servers.</li>
  </ul>

    B, C
  </li>

  """
output_json = html_to_json.convert(html_string)
pyperclip.copy(output_json)
