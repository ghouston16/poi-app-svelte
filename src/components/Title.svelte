<script>
  import homer from "/src/assets/ireland-flag.jpg"
  import {title, subTitle} from "../stores.js"
</script>

<div class="uk-width-2-3@m  uk-card uk-card-default uk-padding-small uk-visible@m">
  <div class="uk-grid">
    <div class="uk-width-1-6@m">
      <a href="/"> <img src="{homer}" width="60" alt="img"/> </a>
    </div>
    <div class="uk-width-expand@m uk-text-left">
      <div class="title">
        {$title}
      </div>
      <div class="uk-text-muted uk-text-small">
        {$subTitle}
      </div>
    </div>
    <div class="uk-card uk-card-small uk-text-center uk-padding-remove">
      <a target="_blank" href="https://github.com/wit-hdip-comp-sci-2020/donation-svelte">
        <div>
          <i class="fas fa-donate fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" uk-tooltip></i>
        </div>
        <div class="uk-width-expand@m uk-text-left">
          <div class="uk-text-muted uk-text-center" style="font-size:xx-small">POI 0.1</div>
        </div>
      </a>
    </div>
  </div>
</div>