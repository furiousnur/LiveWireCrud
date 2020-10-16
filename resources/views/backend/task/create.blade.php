@extends('backend.layouts.layout')
@section('title')
    Task
@endsection
{{--@push('css')
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.1.0/fullcalendar.min.css' />
@endpush--}}
@section('content')
{{--    Add Member Modal--}}
<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-dashboard"></i> Add New Task</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#">Add New Task</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-8 offset-2 ">
            <div class="tile">
                <h3 class="tile-title">Task List</h3>
                <div class="tile-body">
                    <form method="post" action="{{ route('tasks.store') }}">
                        @csrf
                        <div class="form-group">
                            <label class="col-form-label">Name:</label>
                            <input type="text" name="name" class="form-control" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Date:</label>
                            <input type="date" name="task_date" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Description:</label>
                            <textarea class="form-control" placeholder="Description"  name="description" id="message-text"></textarea>
                        </div>
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

{{--@push('script')
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="https://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>
    <script>
        $('.date').datepicker({
            autoclose: true,
            dateFormat: "yy-mm-dd"
        });
    </script>
@endpush--}}
@endsection
