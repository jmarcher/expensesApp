<?php

namespace App\Http\Controllers;

use App\Expense;
use Illuminate\Http\Request;

use App\Http\Requests;
use Symfony\Component\Console\Input\Input;
use Symfony\Component\HttpFoundation\Response;

class ExpensesController extends Controller
{
    /**
     * @api {get} /expenses/[?timestampStart=:start&timestampEnd=:end] Lista de todas las expenses
     * @apiName GetExpenses
     * @apiGroup Expenses
     * @apiVersion 0.0.1
     *
     * @apiParam {Number} [start] Inicio del filtro de timestamp
     * @apiParam {Number} [end] Límite del filtro de timestamp
     *
     * @apiSuccess {Object[]} expenses array de stores.
     * @apiSuccess {Number} expenses.id id expense
     * @apiSuccess {String} expenses.concepto concepto expense
     * @apiSuccess {Number} expenses.valor valor de la expense
     * @apiSuccess {Number} expenses.timestamp timestamp
     * @apiSuccess {Boolean} expenses.isIngreso si es ingreso o no
     */
    public function index()
    {
        if(request()->has('timestampStart') && request()->has('timestampEnd')){
            $expenses = Expense::whereBetween('timestamp',[request()->get('timestampStart'),request()->get('timestampEnd')]);
            return \Response::json($expenses->get());
        }
        return \Response::json(Expense::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * @api {post} /expenses/ Guarda una expense nueva
     * @apiName PostStoreExpense
     * @apiGroup Expenses
     * @apiVersion 0.0.1
     * @apiDescription Response con la expense recién creada
     *
     * @apiParam {String} concepto concepto expense
     * @apiParam {Number} valor valor de la expense
     * @apiParam {Number} timestamp timestamp
     * @apiParam {Boolean} isIngreso si es ingreso o no
     *
     * @apiSuccess {Number} id id expense
     * @apiSuccess {String} concepto concepto expense
     * @apiSuccess {Number} valor valor de la expense
     * @apiSuccess {Number} timestamp timestamp
     * @apiSuccess {Boolean} isIngreso si es ingreso o no
     */
    public function store(Request $request)
    {
        return \Response::json(Expense::create($request->input()));
    }

    /**
     * @api {get} /expenses/:id Detalles una expense
     * @apiName GetStoreExpense
     * @apiGroup Expenses
     * @apiVersion 0.0.1
     *
     * @apiParam {Number} id Id de expense
     *
     * @apiSuccess {Number} id id expense
     * @apiSuccess {String} concepto concepto expense
     * @apiSuccess {Number} valor valor de la expense
     * @apiSuccess {Number} timestamp timestamp
     * @apiSuccess {Boolean} isIngreso si es ingreso o no
     */
    public function show($id)
    {
        return \Response::json(Expense::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * @api {put} /expenses/:id Actualizar expense
     * @apiName PutStoreExpense
     * @apiGroup Expenses
     * @apiVersion 0.0.1
     * @apiDescription Response con la expense recién editada
     *
     * @apiParam {Number} id Id de la expense a actualizar
     * @apiParam {String} [concepto] concepto expense
     * @apiParam {Number} [valor] valor de la expense
     * @apiParam {Number} [timestamp] timestamp
     * @apiParam {Boolean} [isIngreso] si es ingreso o no
     *
     * @apiSuccess {Number} id id expense
     * @apiSuccess {String} concepto concepto expense
     * @apiSuccess {Number} valor valor de la expense
     * @apiSuccess {Number} timestamp timestamp
     * @apiSuccess {Boolean} isIngreso si es ingreso o no
     */
    public function update(Request $request, $id)
    {
        $expense = Expense::findOrFail($id);
        if(! $expense){
            return \Response::json(Expense::create($request->input()));
        }
        $expense->fill($request->input())->save();

        return \Response::json($expense);
    }

    /**
     * @api {delete} /expenses/:id Borrar expense
     * @apiName DeleteStoreExpense
     * @apiGroup Expenses
     * @apiVersion 0.0.1
     *
     * @apiParam {Number} id Id de la expense a borrar
     *
     * @apiSuccess {Object} clase vacía
     */
    public function destroy($id)
    {
        $expense = Expense::findOrFail($id);
        $expense->delete();
        return \Response::json(new class {});
    }
}
