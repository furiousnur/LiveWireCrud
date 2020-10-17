@extends('backend.layouts.layout')
@section('title')
    Member
@endsection
@push('css')
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.1.0/fullcalendar.min.css' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
@endpush
@section('content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-dashboard"></i> Task</h1>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">Task</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <a href="{{route('tasks.create')}}" class="btn btn-primary float float-right">Add Task</a> 
                    <h3 class="tile-title">Task List</h3>
                    <br>
                    <div class="tile-body">
                        <div class="row">
                            <div class="col-md-3 offset-md-4">
                                <div id='calendar'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a class="btn btn-primary" href="#ex1" rel="modal:open">Open Modal</a>
        <div id="ex1" class="modal">
            <p>Thanks for clicking. That felt good.</p>
            <a href="#" rel="modal:close">Close</a>
        </div>

    </main>

    <!-- Modal HTML embedded directly into document -->

    @push('script')
        <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.1.0/fullcalendar.min.js'></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
        <script>
            $(document).ready(function() {
                // page is now ready, initialize the calendar...
                $('#calendar').fullCalendar({
                    // put your options and callbacks here
                    events : [
                        @foreach($tasks as $task)
                        {
                            title : '{{ $task->name }}',
                            start : '{{ $task->task_date }}',
                            {{--url : '{{ route('tasks.show', $task->id) }}'--}}
                            url : '<a href="#ex1" rel="modal:open">Open Modal</a>'
                        },
                        @endforeach
                    ]
                })
            });
        </script>
    @endpush
@endsection
