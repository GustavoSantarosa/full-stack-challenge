<?php

declare(strict_types = 1);

return [
    /*
    |--------------------------------------------------------------------------
    | Default Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the connections below you wish to use as
    | your default connection for all work. Of course, you may use many
    | connections at once using the manager class.
    |
    */

    'default' => env('HASHID_DEFAULT', 'desafio'),

    /*
    |--------------------------------------------------------------------------
    | Enable Cryptography
    |--------------------------------------------------------------------------
    |
    */

    'enable_cryptography' => env('ENABLE_CRYPTOGRAPHY', true),

    /*
    |--------------------------------------------------------------------------
    | Enable Unit Status Checker
    |--------------------------------------------------------------------------
    |
    */

    'enable_unit_status_checker' => env('ENABLE_UNIT_STATUS_CHECKER', true),

    /*
    |--------------------------------------------------------------------------
    | Transform Attributes on Model
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the attributes you wish to transform on
    | your models. Of course, you may use many attributes at once using the
    | manager class.
    | Example: 'attributes' => ['id', 'user_id']
    |
    */

    'attributes' => [],

    /*
    |--------------------------------------------------------------------------
    | Regex Attributes to Transform on Request
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the attributes you wish to transform on
    | your requests. Of course, you may use many attributes at once using the
    | manager class.
    |
    */
    'regex' => '/(^id$|_id$|Id$|_ids$)/',

    /*
    |--------------------------------------------------------------------------
    | Headers to Transform on Request
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the headers you wish to transform on
    | your requests. Of course, you may use many headers at once using the
    | manager class.
    |
    */
    'headers' => [
        'regex' => '/^(X-Admin|X-Agent|X-User)/i',
    ],

    /*
    |--------------------------------------------------------------------------
    | Hashids Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the connections setup for your application. Example
    | configuration has been included, but you may add as many connections as
    | you would like.
    |
    */

    'connections' => [
        'main' => [
            'salt'   => '',
            'length' => 0,
            // 'alphabet' => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        ],
        'desafio' => [
            'salt'     => env('HASHIDS_SALT', 'example'),
            'length'   => 10,
            'alphabet' => 'abcdefghijklssmnopqrstuvwxyzABCDEFGHIJKLMNOPQZ1234567890',
        ],
    ],
];
