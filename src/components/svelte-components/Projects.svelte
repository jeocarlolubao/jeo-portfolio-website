<script>
  import Projects from "./Projects.svelte";
  import { projects } from "./../../data/projects.ts";
</script>

<div class="bg-black text-white font-helvetica">
  <div class="w-full max-w-9xl mx-auto px-8 py-12">
    <h3
      class="text-7xl md:text-9xl font-extrabold tracking-tighter mb-12 text-left uppercase"
    >
      Projects
    </h3>
    <div class="grid grid-cols-1 gap-16">
      {#each projects.projects as project}
        <div class="border-t border-white pt-8 pb-10">
          <!-- Project Title and Short Description -->
          <div class="space-y-4">
            <h3
              class="text-3xl font-extrabold uppercase tracking-tight text-white"
            >
              {project.title}
            </h3>
            <p class="text-lg text-gray-300 leading-relaxed">
              {project.description.short_description}
            </p>
          </div>

          <!-- Project Long Description -->
          <p class="text-sm text-gray-400 leading-relaxed mt-4">
            {project.description.long_description}
          </p>

          <!-- Visit Project Button -->
          {#if project.websiteLink}
            <a
              href={project.websiteLink}
              class="btn-swiss mt-8 inline-block"
              target="_blank">Visit Project</a
            >
          {/if}

          <!-- Tech Stack -->
          <h4 class="text-xl font-semibold mt-10">Tech Stack</h4>
          <div
            class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 mt-4 w-fit"
          >
            {#each project.techStack as tech}
              <div class="flex items-center justify-center">
                <img
                  src={tech.imgSrc}
                  alt={tech.name}
                  class="w-12 h-12 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-300"
                />
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Swiss design button with hover/focus effects */
  .btn-swiss {
    @apply bg-white text-black font-bold uppercase text-sm px-6 py-3 border-2 border-black transition-all duration-200 ease-in-out;
  }

  .btn-swiss:hover {
    @apply bg-black text-white;
  }

  .btn-swiss:focus {
    @apply bg-black text-white outline-none;
  }

  .btn-swiss:active {
    @apply bg-gray-800 text-white;
  }

  /* Custom styles for a striking and minimal layout */
  h3,
  h4 {
    letter-spacing: -0.03em;
  }

  .space-y-4 {
    margin-top: 1.5rem;
  }

  .text-white {
    color: white;
  }

  .text-gray-300 {
    color: #dcdcdc;
  }

  .text-gray-400 {
    color: #b0b0b0;
  }

  .text-gray-800 {
    color: #333;
  }

  /* Improved spacing between elements */
  .gap-16 {
    gap: 4rem;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  .pt-8 {
    padding-top: 2rem;
  }

  .pb-10 {
    padding-bottom: 2.5rem;
  }

  /* Grid setup */
  .grid {
    display: grid;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(1, 1fr);
  }

  .sm\\:grid-cols-6 {
    grid-template-columns: repeat(6, 1fr);
  }

  .md\\:grid-cols-8 {
    grid-template-columns: repeat(8, 1fr);
  }

  .object-contain {
    object-fit: contain;
  }

  .font-helvetica {
    font-family: "Helvetica", sans-serif;
  }

  /* Divider Styling */
  .border-t {
    border-top-width: 2px;
  }
</style>
