<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Members extends Component
{
    public $name;

    public function mount($name){
        $this->name = $name;
    }

    public function render()
    {
//        return "done";
//        return view('livewire.members');
    }

    public function member(){
        return view('livewire.members');
    }
}
