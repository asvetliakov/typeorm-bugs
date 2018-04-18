## Reproduce

1) Create test database/modify ormconfig.json
2) Install node_modules - ```yarn```
3) Compile sources - ```yarn run tsc```
4) Run initial migration - ```yarn run typeorm migrations:run```
5) Install typeorm@next - ```yarn add typeorm@next```
6) Upgrade ```migrations``` table to the new version
7) Generate uprade migration - ```yarn run typeorm migration:generate -n Upgrade -d ./src/migrations```
8) Compile as in 3)
9) Execute upgrade migration - ```yarn run typeorm migration:run```
10) Generate migration ```yarn run typeorm migration:generate -n Test2 -d ./src/migrations``` - Expected no changes, got migration with recreating indexes and keys
