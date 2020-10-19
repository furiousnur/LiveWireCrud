<?php


namespace App\Library;


interface MemberInterface
{
    public function getAll();
    public function store($request);
    public function show($id);
}
