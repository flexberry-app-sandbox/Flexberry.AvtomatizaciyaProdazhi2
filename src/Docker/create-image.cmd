docker build --no-cache -f SQL\Dockerfile.PostgreSql -t avtomatizaciya_prodazhi2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t avtomatizaciya_prodazhi2/app ../..
