docker build --no-cache -f SQL\Dockerfile.PostgreSql -t eshhe_primer/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t eshhe_primer/app ../..
