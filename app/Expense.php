<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Expense extends Model
{
    use SoftDeletes;
    protected $fillable = ['isIngreso', 'timestamp', 'concepto', 'valor'];

    protected $casts = [
        'isIngreso' => 'boolean',
    ];
}
