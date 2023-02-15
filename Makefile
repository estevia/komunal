VERSION=$(shell  git tag -l -n "v0*" --sort=-creatordate | head -n 1)
SHELL := /bin/bash

add-latest-tag:
	git fetch --tags
	source ./scripts/autotag.sh && autotag ${VERSION}



	inventorylist:
	@npx cypress run --spec "cypress/e2e/lentera/Inventories/InventoryList/inventorylistpage.cy.js" --record --key 92672e32-3684-4bfd-98ce-eb29c442001d

addnewinventory:
	@npx cypress run --spec "cypress/e2e/lentera/Inventories/AddNewInventory/addnewinventorypage.cy.js" --record --key 92672e32-3684-4bfd-98ce-eb29c442001d
	

open:
	@npx cypress open

