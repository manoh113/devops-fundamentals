## tf file to launch ec2 instance
resource "aws_instance" "example_ec2" {
  ami           = "ami-0c02fb55956c7d316" # Amazon Linux 2 AMI
  instance_type = "t2.micro"

  tags = {
    Name = "example-ec2-instance"
  }
}
