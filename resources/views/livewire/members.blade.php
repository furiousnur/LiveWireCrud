<div>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="row">
                    <div class="col-4">
                        <h3 class="tile-title">Member List</h3>
                    </div>
                    <div class="col-5">
                        <input type="text" class="form-control" placeholder="Search......." wire:model="search"/>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-primary pull pull-right" data-toggle="modal" data-target="#memberModal">Add Member</button>
                    </div>
                </div>

                @if(session()->has('message'))
                    <div class="alert alert-success">
                        {{session('message')}}
                    </div>
                @endif
                <br>
                {{--<div class="tile-body">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered" id="sampleTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($members as $index=>$member)
                                    <tr>
                                        <td>{{$index+1}}</td>
                                        <td>{{$member->name}}</td>
                                        <td>{{$member->email}}</td>
                                        <td>{{$member->phone}}</td>
                                        <td>{{$member->address}}</td>
                                        <td>{{$member->description}}</td>
                                        <td>
                                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#memberUpdateModal" wire:click.prevent="edit({{$member->id}})">
                                                Edit
                                            </button>

                                            <button type="button" class="btn btn-danger" wire:click.prevent="delete({{$member->id}})">Delete</button>
                                        </td>
                                    </tr>
                                @empty
                                    <h4>No Data Found!!</h4>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>--}}
                <div class="tile-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                @forelse($members as $index=>$member)
                                    <tr>
                                        <td>{{$index+1}}</td>
                                        <td>{{$member->name}}</td>
                                        <td>{{$member->email}}</td>
                                        <td>{{$member->phone}}</td>
                                        <td>{{$member->address}}</td>
                                        <td>{{$member->description}}</td>
                                        <td>
                                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#memberUpdateModal" wire:click.prevent="edit({{$member->id}})">
                                                Edit
                                            </button>

                                            <button type="button" class="btn btn-danger" wire:click.prevent="delete({{$member->id}})">Delete</button>
                                        </td>
                                    </tr>
                                @empty
                                    {{--                                    <h4>No Data Found!!</h4>--}}
                                @endforelse
                            </tbody>
                        </table>
                        {{ $members->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('backend.member.create')
    @include('backend.member.update')
</div>
