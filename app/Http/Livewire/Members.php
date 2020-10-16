<?php

namespace App\Http\Livewire;

use App\Models\Member;
use Brian2694\Toastr\Facades\Toastr;
use Livewire\Component;

class Members extends Component
{
    public $ids;
    public $name;
    public $email;
    public $phone;
    public $address;
    public $description;

    public function resetInputFields(){
        $this->name = '';
        $this->email = '';
        $this->phone = '';
        $this->address = '';
        $this->description = '';
    }

    public function store(){
        $validateData = $this->validate([
            'name' => 'required',
            'email' => 'required|unique:members,email',
            'phone' => 'required|numeric',
            'address' => 'required|string',
            'description' => 'required'
        ]);

        Member::create($validateData);

//        session()->flash('message', 'Member created successfully.');
        Toastr::success('Successfully member added.', 'Success');
        $this->resetInputFields();
        $this->emit('memberAdded');
    }

    public function edit($id){
        $member = Member::findOrFail($id);
        $this->ids = $member->id;
        $this->name = $member->name;
        $this->email = $member->email;
        $this->phone = $member->phone;
        $this->address = $member->address;
        $this->description = $member->description;
    }


    public function update(){
        $validateData = $this->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'address' => 'required|string',
            'description' => 'required'
        ]);

        if ($this->ids){
            $member = Member::findOrFail($this->ids);
            $member->update([
                'name' => $this->name,
                'email' => $this->email,
                'phone' => $this->phone,
                'address' => $this->address,
                'description' => $this->description,
            ]);
            Toastr::success('Successfully member updated.', 'Success');
            $this->resetInputFields();
            $this->emit('memberUpdated');
        }
    }

    public function delete($id){
        Member::findOrFail($id)->delete();
        Toastr::success('Successfully member deleted.', 'Success');
    }

    public function render()
    {
        $members = Member::latest()->get();
        return view('livewire.members',compact('members'));
    }
}
