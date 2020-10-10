<?php

namespace App\Http\Livewire;

use App\Models\Member;
use Brian2694\Toastr\Facades\Toastr;
use Livewire\Component;

class Members extends Component
{
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
            'email' => 'required|email',
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

    public function render()
    {
        $members = Member::latest()->get();
        return view('livewire.members',compact('members'));
    }
}
