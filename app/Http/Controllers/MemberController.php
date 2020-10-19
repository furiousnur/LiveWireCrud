<?php

namespace App\Http\Controllers;

use App\Library\MemberInterface;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    protected $repo;
    public function __construct(MemberInterface $repo)
    {
        $this->repo = $repo;
    }

    public function index()
    {
//        $members = $this->repo->getAll();
        return view('backend.member.member');
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
