<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Symfony\Component\HttpFoundation\Response;

class ExpensesController extends Controller
{
    /**
     * @api {get} /expenses/ Lista de todas las expenses
     * @apiName GetExpenses
     * @apiGroup Expenses
     * @apiVersion 0.0.1
     *
     *
     * @apiSuccess {Object[]} stores array de stores.
     * @apiSuccess {Number} stores.id id store
     * @apiSuccess {String} stores.nombre nombre del store
     * @apiSuccess {String} stores.nickname nickname del store
     * @apiSuccess {String} stores.descripcion descripcion del store
     * @apiSuccess {String} stores.telefono telefono del store
     * @apiSuccess {String} stores.ubicacion Ubicacion del store
     * @apiSuccess {String} stores.imagen URL imágen del store
     */
    public function index()
    {
        return 
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
