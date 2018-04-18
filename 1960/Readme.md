## Reproduce

1) Create test database/modify ormconfig.json
2) Install node_modules - ```yarn```
3) Compile sources - ```yarn run tsc```
4) Run initial migration - ```yarn run typeorm migration:run```
5) Generate migration again - ```yarn run typeorm migration:generate -n Test -d ./src/migrations``` - Expected no changes, got migration
6) Compile sources again as in 3)
7) Run Test migration as in 4)
8) Generate migration again - Same result
