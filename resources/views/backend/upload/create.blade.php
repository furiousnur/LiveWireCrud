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
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label class="col-form-label">Name:</label>
                    <input type="text" name="name" wire:model="name" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                    <label class="col-form-label">Email:</label>
                    <input type="email" name="email" wire:model="email" class="form-control" placeholder="Email">
                    @error('email')
                    <p class="text-danger">{{$message}}</p>
                    @enderror
                </div>
                <div class="form-group">
                    <label class="col-form-label">Phone:</label>
                    <input type="text" class="form-control" wire:model="phone" name="phone" placeholder="Phone Number">
                </div>
                <div class="form-group">
                    <label class="col-form-label">Address:</label>
                    <input type="text" class="form-control" name="address" placeholder="Address here....." wire:model="address">
                </div>
                <div class="form-group">
                    <label class="col-form-label">Description:</label>
                    <textarea class="form-control" placeholder="Description" wire:model="description" name="description" id="message-text"></textarea>
                </div>
            </form>
        </div>
    </main>
@endsection
