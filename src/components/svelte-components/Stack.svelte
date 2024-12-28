<script>
  import { techStack, designStack } from "./../../data/stack.ts";
</script>

<div class="p-16 bg-black text-white">
  <!-- Tech Stack Section -->
  <div class="mb-24">
    <div class="mb-16">
      <h1
        class="text-[10vw] font-helvetica-bold uppercase tracking-tighter leading-none opacity-0 animate-heading"
      >
        Tech<br />Stack
      </h1>
      <p
        class="text-sm font-helvetica uppercase tracking-widest mt-4 opacity-0 animate-fade-slide-up"
        style="animation-delay: 0.4s"
      >
        *encountered so far...
      </p>
    </div>

    <!-- Tech Stack Grid -->
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8">
      {#each techStack.techStack as tech, i}
        <div
          class="group opacity-0 animate-fade-slide-up"
          style="animation-delay: {i * 0.1}s"
        >
          <img
            src={tech.imgSrc}
            alt=""
            class="w-full h-24 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      {/each}
    </div>
  </div>

  <!-- UI/UX Design Tools Section -->
  <div>
    <div class="mb-16">
      <h1
        class="text-[10vw] font-helvetica-bold uppercase tracking-tighter leading-none opacity-0 animate-heading"
      >
        UI / UX<br />Design
      </h1>
    </div>

    <!-- Design Tools Grid -->
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8">
      {#each designStack.designStack as tool, i}
        <div
          class="group opacity-0 animate-fade-slide-up"
          style="animation-delay: {i * 0.1}s"
        >
          <img
            src={tool.imgSrc}
            alt=""
            class="w-full h-24 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-slide-up {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }

  .animate-heading {
    animation: fadeSlideUp 1s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
  }
</style>
