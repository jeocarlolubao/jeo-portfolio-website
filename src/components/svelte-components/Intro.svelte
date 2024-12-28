<script>
  import { profileData } from "./../../data/intro.ts";
</script>

<div
  class="bg-white text-black font-helvetica min-h-screen flex flex-col md:flex-row items-center p-16"
>
  <!-- Left Section (Hero Title) -->
  <div
    class="flex flex-col md:w-1/2 justify-center items-start space-y-8 md:space-y-12 text-left"
  >
    <!-- Title Section -->
    <div class="space-y-4">
      <h1
        class="text-6xl font-extrabold uppercase tracking-tight text-black leading-tight"
      >
        Hi! I'm Jeo
      </h1>
      <h3 class="text-2xl font-medium uppercase tracking-widest text-gray-800">
        Software Developer & Graphic Designer
      </h3>
    </div>

    <!-- Divider -->
    <hr class="h-px w-32 bg-black border-0 mt-6" />

    <!-- About Me Section -->
    <div class="text-lg font-light leading-relaxed mt-6 max-w-lg">
      <p>{profileData.aboutMe}</p>
    </div>

    <!-- Social Links -->
    <div class="flex space-x-6 items-center mt-8">
      {#each profileData.socials as social}
        <a
          href={social.link}
          target="_blank"
          class="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:text-white hover:fill-white transition-all hover:border-4"
        >
          <img src={social.imgSrc} alt={social.name} class="w-8 h-8" />
        </a>
      {/each}
    </div>
  </div>

  <!-- Right Section (Updated Visual Design) -->
  <div class="hidden md:block md:w-1/2 mt-16 md:mt-0 space-y-12">
    <!-- New Visual Design: Asymmetrical Grid with striking blocks -->
    <div class="grid grid-cols-2 gap-8">
      <!-- Block 1: Large Black Block -->
      <div class="bg-black w-full h-48 col-span-2 relative">
        <div class="absolute inset-0 flex items-center justify-center"></div>
      </div>

      <!-- Block 2: Vertical Split with Black and Light Gray -->
      <div class="w-full h-32 bg-black"></div>
      <div class="w-full h-32 bg-gray-200"></div>

      <!-- Block 3: Circle and Rectangular Combo -->
      <div class="flex w-full h-32 items-center justify-between">
        <div class="w-32 h-32 bg-black rounded-full"></div>
        <div class="w-1/3 h-full bg-gray-200"></div>
      </div>

      <!-- Large Horizontal Block with Message -->
      <div class="col-span-2 bg-gray-200 w-full h-48 relative">
        <div class="absolute inset-0 flex items-center justify-center"></div>
      </div>

      <!-- Final Block: Asymmetrical Black and Gray Combo -->
      <div class="w-full h-32 bg-black"></div>
      <div class="w-full h-32 bg-gray-200"></div>
    </div>
  </div>
</div>

<style>
  /* Custom styles for Swiss design */
  h1 {
    font-size: 6rem;
    letter-spacing: -0.03em;
  }

  h3 {
    font-size: 2rem;
    letter-spacing: 0.1em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .w-full {
    width: 100%;
  }

  .text-left {
    text-align: left;
  }

  .space-y-12 {
    margin-top: 3rem;
  }

  .tracking-tight {
    letter-spacing: -0.05em;
  }

  .tracking-widest {
    letter-spacing: 0.1em;
  }

  .bg-gray-200 {
    background-color: #f2f2f2;
  }

  .bg-black {
    background-color: #000;
  }

  .font-helvetica {
    font-family: "Helvetica", sans-serif;
  }

  /* Additional custom styles */
  .leading-tight {
    line-height: 1.1;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  .font-light {
    font-weight: 300;
  }

  .font-medium {
    font-weight: 500;
  }

  .font-bold {
    font-weight: 700;
  }
</style>
