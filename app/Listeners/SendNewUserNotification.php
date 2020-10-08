<?php

namespace App\Listeners;

use App\Models\User;
use App\Notifications\NewUserNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
//use Notification;
use Illuminate\Notifications\Notification;
class SendNewUserNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
      /*  $admins = User::whereHas('role',function ($q){
           $q->where('id',1);
        })->get();*/

        $admins = User::where('id',7)->first();

        Notification::send($admins,new NewUserNotification($event->user));
    }
}
