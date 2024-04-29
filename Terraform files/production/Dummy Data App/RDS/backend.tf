terraform {
  backend "s3" {
    bucket = "terraform-state"
    region = "us-west-2"
    key    = "prod/dummy-data/rds/terraform.tfstate"
  }
  required_version = "~> 1.6.0"
}
