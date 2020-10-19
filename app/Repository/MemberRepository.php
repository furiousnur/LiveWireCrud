<?php


namespace App\Repository;


use App\Library\MemberInterface;
use App\Models\Member;
use Livewire\WithPagination;
class MemberRepository implements MemberInterface
{
    use WithPagination;
    public function getAll()
    {
        // TODO: Implement getAll() method.
        $members = Member::latest()->paginate(10);
        return $members;
    }

    public function store($request)
    {
        // TODO: Implement store() method.
    }

    public function show($id)
    {
        // TODO: Implement show() method.
    }
}
