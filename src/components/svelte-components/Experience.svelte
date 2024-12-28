<script>
  import Experience from "./Experience.svelte";
  import { experience } from "./../../data/experience.ts";

  function calculateDuration(start, end) {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth() + years * 12;
    const displayYears = Math.floor(months / 12);
    const displayMonths = months % 12;
    let duration = "";
    if (displayYears > 0) {
      duration += `${displayYears} ${displayYears === 1 ? "yr" : "yrs"} `;
    }
    if (displayMonths > 0) {
      duration += `${displayMonths} ${displayMonths === 1 ? "mo" : "mos"}`;
    }
    return duration.trim();
  }

  function sortRoles(roles) {
    return roles
      .slice()
      .sort((a, b) => new Date(b.durationStart) - new Date(a.durationStart));
  }
</script>

<div class="bg-white text-black font-helvetica px-6 py-12">
  <div class=" mx-auto text-left">
    <h3 class="text-5xl md:text-9xl font-helvetica-bold uppercase mb-8">
      Experience
    </h3>
    {#each experience.experience as exp, index}
      <div
        class="experience-item border-b border-black py-8 opacity-0 transition-opacity duration-1000 ease-in-out transform translate-y-12 animate-fade-up"
        style="animation-delay: {index * 200}ms"
      >
        {#if exp.roles.length === 1}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Left Side: Title, Company, Duration -->
            <div class="flex flex-col text-left">
              <p class="text-3xl font-bold leading-tight mb-2 uppercase">
                {exp.roles[0].title}
              </p>
              <p class="text-lg mb-1 uppercase">{exp.company}</p>
              <p class="text-sm mb-1">
                {exp.roles[0].durationStart} - {exp.roles[0].durationEnd
                  ? exp.roles[0].durationEnd
                  : "Present"}
              </p>
              <p class="text-sm text-gray-600">
                ({calculateDuration(
                  exp.roles[0].durationStart,
                  exp.roles[0].durationEnd,
                )})
              </p>
            </div>
            <!-- Right Side: Description -->
            <div class="text-left">
              {#if exp.roles[0].responsibilities && exp.roles[0].responsibilities.roleDescription}
                <ul class="list-disc pl-6 text-sm mt-2">
                  {#each exp.roles[0].responsibilities.roleDescription as description}
                    <li>{description}</li>
                  {/each}
                </ul>
              {/if}
              {#if exp.roles[0].responsibilities && exp.roles[0].responsibilities.featuredEvents}
                <p class="font-bold mt-4">Featured Events:</p>
                <ul class="list-disc pl-6 text-sm">
                  {#each exp.roles[0].responsibilities.featuredEvents as event}
                    <li>{event}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          </div>
        {:else}
          <p class="text-3xl font-bold mt-8 uppercase">{exp.company}</p>
          {#each sortRoles(exp.roles) as role}
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 opacity-0 transition-opacity duration-1000 ease-in-out transform translate-x-12 animate-slide-up"
            >
              <!-- Left Side: Title, Duration -->
              <div class="flex flex-col">
                <p class="text-lg font-medium uppercase">{role.title}</p>
                <p class="text-sm text-gray-600">
                  {role.durationStart} - {role.durationEnd
                    ? role.durationEnd
                    : "Present"}
                </p>
                <p class="text-sm text-gray-500">
                  ({calculateDuration(role.durationStart, role.durationEnd)} )
                </p>
              </div>
              <!-- Right Side: Description -->
              <div class="text-left">
                {#if role.responsibilities && role.responsibilities.roleDescription}
                  <ul class="list-disc pl-6 text-sm mt-2">
                    {#each role.responsibilities.roleDescription as description}
                      <li>{description}</li>
                    {/each}
                  </ul>
                {/if}
                {#if role.responsibilities && role.responsibilities.featuredEvents}
                  <p class="font-bold mt-4">Featured Events:</p>
                  <ul class="list-disc pl-6 text-sm">
                    {#each role.responsibilities.featuredEvents as event}
                      <li>{event}</li>
                    {/each}
                  </ul>
                {/if}
              </div>
            </div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes fade-up {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-up {
    animation: fade-up 1s ease-in-out forwards;
  }

  .animate-slide-up {
    animation: slide-up 1s ease-in-out forwards;
  }
</style>
