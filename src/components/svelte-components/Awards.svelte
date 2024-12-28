<script>
  import { awards } from "./../../data/awards.ts";
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-12 py-16">
    <!-- Title Section with line accent -->
    <div class="col-span-1">
      <h3 class="font-helvetica-bold text-4xl md:text-8xl mb-6 relative">
        Awards, <br /> Conferences, <br /> and Certifications
        <div class="absolute bottom-0 left-0 w-64 h-1 bg-black"></div>
      </h3>
    </div>

    <!-- Awards and Competitions Section with background block -->
    <div class="col-span-1 bg-white p-8 border border-black">
      <h4 class="font-bold text-2xl mb-4 text-black">
        Awards and Competitions
      </h4>
      <ul class="list-disc ml-8 space-y-2 text-lg text-black">
        {#each awards.awardsConferencesCertifications.awardsCompetitions as award}
          <li>{award}</li>
        {/each}
      </ul>
    </div>

    <!-- Conferences Attended Section with accent line -->
    <div class="col-span-1">
      <h4 class="font-bold text-2xl mb-4 relative text-black">
        Conferences Attended
        <div class="absolute bottom-0 left-0 w-12 h-1 bg-black"></div>
      </h4>
      <ul class="list-disc ml-8 space-y-2 text-lg text-black">
        {#each awards.awardsConferencesCertifications.conferencesAttended as conference}
          <li>{conference}</li>
        {/each}
      </ul>
    </div>

    <!-- Talks Section with contrast block -->
    <div class="col-span-1 bg-white p-8 border border-black">
      <h4 class="font-bold text-2xl mb-4 text-black">Talks</h4>
      <ul class="list-disc ml-8 space-y-2 text-lg text-black">
        {#each awards.awardsConferencesCertifications.conferences as conference}
          <li>{conference}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
