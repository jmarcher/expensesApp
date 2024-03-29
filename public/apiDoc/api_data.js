define({ "api": [
  {
    "type": "delete",
    "url": "/expenses/:id",
    "title": "Borrar expense",
    "name": "DeleteStoreExpense",
    "group": "Expenses",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la expense a borrar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "clase",
            "description": "<p>vacía</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ExpensesController.php",
    "groupTitle": "Expenses"
  },
  {
    "type": "get",
    "url": "/expenses/[?timestampStart=:start&timestampEnd=:end]",
    "title": "Lista de todas las expenses",
    "name": "GetExpenses",
    "group": "Expenses",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "start",
            "description": "<p>Inicio del filtro de timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "end",
            "description": "<p>Límite del filtro de timestamp</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "expenses",
            "description": "<p>array de stores.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expenses.id",
            "description": "<p>id expense</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expenses.concepto",
            "description": "<p>concepto expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expenses.valor",
            "description": "<p>valor de la expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expenses.timestamp",
            "description": "<p>timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "expenses.isIngreso",
            "description": "<p>si es ingreso o no</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ExpensesController.php",
    "groupTitle": "Expenses"
  },
  {
    "type": "get",
    "url": "/expenses/:id",
    "title": "Detalles una expense",
    "name": "GetStoreExpense",
    "group": "Expenses",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de expense</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id expense</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "concepto",
            "description": "<p>concepto expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>valor de la expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isIngreso",
            "description": "<p>si es ingreso o no</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ExpensesController.php",
    "groupTitle": "Expenses"
  },
  {
    "type": "post",
    "url": "/expenses/",
    "title": "Guarda una expense nueva",
    "name": "PostStoreExpense",
    "group": "Expenses",
    "version": "0.0.1",
    "description": "<p>Response con la expense recién creada</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "concepto",
            "description": "<p>concepto expense</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>valor de la expense</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isIngreso",
            "description": "<p>si es ingreso o no</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id expense</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "concepto",
            "description": "<p>concepto expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>valor de la expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isIngreso",
            "description": "<p>si es ingreso o no</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ExpensesController.php",
    "groupTitle": "Expenses"
  },
  {
    "type": "put",
    "url": "/expenses/:id",
    "title": "Actualizar expense",
    "name": "PutStoreExpense",
    "group": "Expenses",
    "version": "0.0.1",
    "description": "<p>Response con la expense recién editada</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la expense a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "concepto",
            "description": "<p>concepto expense</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "valor",
            "description": "<p>valor de la expense</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timestamp",
            "description": "<p>timestamp</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isIngreso",
            "description": "<p>si es ingreso o no</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id expense</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "concepto",
            "description": "<p>concepto expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "valor",
            "description": "<p>valor de la expense</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isIngreso",
            "description": "<p>si es ingreso o no</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/ExpensesController.php",
    "groupTitle": "Expenses"
  }
] });
