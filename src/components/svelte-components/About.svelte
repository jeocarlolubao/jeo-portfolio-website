<script lang="ts">
  import { profileData } from "./../../data/intro.ts";
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div class="w-full max-w-4xl border-8 border-black p-4 my-8">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0">
        <h3
          class="text-black text-4xl md:text-8xl font-helvetica-bold uppercase"
        >
          About Me
        </h3>
      </div>
      <div class="w-full md:w-2/3 md:pl-4 lg:pl-24">
        <p class="text-black font-helvetica uppercase">
          {profileData.aboutMe}
        </p>
      </div>
    </div>
  </div>
</div>
