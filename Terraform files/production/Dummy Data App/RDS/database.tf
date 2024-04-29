provider "aws" {
  region = "us-west-2"
}

module "database" {
  source = "git:ssh://git@github.com:Vasil-Shaikh/Terraform-Modules.git?ref=v1.0.0"

  aws_region = "us-west-2"

  environment = "prod"

  name = "dummy-data-app"

  instance_class = "db.t3.medium"

  aws_rds_cluster_instance_count = 1

  engine_version     = "5.7.mysql_aurora.2.11.4"
  parameter_template = "aurora-mysql5.7"

  #apply_immediately = true

  CRQ = ""


  subnet_group_name = "prod-1"

  vpc_id = "vpc-XXXXXXX"

  ## CIDR for mysql port 3306
  cidr_blocks = [""]


  db_cluster_parameters = [
    {
      apply_method = "pending-reboot"
      name         = "lower_case_table_names"
      value        = 1
    },
    {
      apply_method = "immediate"
      name         = "time_zone"
      value        = "America/Denver"
    },
  ]
  db_instance_parameters = [
    {
      apply_method = "immediate"
      name         = "long_query_time"
      value        = "5"
    }
  ]
}
