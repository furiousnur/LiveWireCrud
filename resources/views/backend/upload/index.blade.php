@extends('backend.layouts.layout')
@section('title')
    Upload
@endsection
@section('content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-dashboard"></i> Upload</h1>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">Upload</a></li>
            </ul>
        </div>
{{--    @livewire('members')--}}
    <livewire:uploads />
    </main>
@endsection
