<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title"> Latest Comments </h3>
    </div>
    <div class="panel-body">
        <ul class="media-list"> {{#each sidebar.comments}} <li class="media"> <a class="pull-left"
                    href="/images/{{image.uniqueId }}"> <img class="media-object" width="45" height="45"
                        src="/public/upload/ {{ image.filename }}"> </a>
                <div class="media-body"> {{comment}}<br /> <strong class="media-heading"> {{name}}</strong> <small
                        class="text-muted"> {{timeago timestamp }}</small> </div>
            </li> {{/each}} </ul>
    </div>
</div>