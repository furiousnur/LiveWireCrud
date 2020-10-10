
{{--    Add Member Modal--}}
<div wire:ignore.self class="modal fade" id="memberModal" tabindex="-1" role="dialog" aria-labelledby="memberModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="memberModalLabel">Add New Member</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" name="name" wire:model="name" class="form-control" placeholder="Name">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Email:</label>
                        <input type="email" name="email" wire:model="email" class="form-control" placeholder="Email">
                        {{--@error('email')
                        <p class="text-danger">{{$message}}</p>
                        @enderror--}}
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Phone:</label>
                        <input type="text" class="form-control" wire:model="phone" name="phone" placeholder="Phone Number" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" wire:model="address" class="col-form-label">Address:</label>
                        <input type="text" class="form-control" name="address" placeholder="Address here....." wire:model="address" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Description:</label>
                        <textarea class="form-control" placeholder="Description" wire:mode="description" name="description" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" wire:click.prevent="store()" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</div>
