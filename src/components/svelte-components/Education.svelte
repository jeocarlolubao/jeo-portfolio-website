<script>
  import { education } from "./../../data/education.ts";
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div class="w-full px-8 py-16">
    <!-- "EDUCATION" Header -->
    <div class="text-left mb-16">
      <h2
        class="text-6xl text-center md:text-left md:text-9xl font-helvetica-bold uppercase my-4"
      >
        EDUCATION
      </h2>
    </div>

    <!-- Education Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      {#each education.education as edu}
        <!-- Left Column -->
        <div class="flex flex-col justify-between border border-black p-8">
          <div>
            <h3 class="text-3xl font-helvetica-bold mb-4">{edu.institution}</h3>
            <p class="text-xl font-light mb-2">{edu.degree}</p>
            <p class="text-lg font-light mb-4">{edu.duration}</p>
          </div>

          <div>
            <h4 class="text-lg font-bold text-black mb-2">Awards</h4>
            <ul class="list-disc pl-6">
              {#each edu.awards as award}
                <li class="text-lg font-light mb-2">{award}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col justify-between border border-black p-8">
          <div>
            <h4 class="text-lg font-bold text-black mb-2">Organizations</h4>
            {#each edu.organizations as org}
              <div class="mb-4">
                <p class="text-lg font-medium mb-1">{org.name}</p>
                {#each Object.entries(org.positions) as [position, years]}
                  <div class="mb-2">
                    <p class="font-light">{position}</p>
                    <ul class="list-disc pl-6">
                      {#each years as year}
                        <li class="text-lg">{year}</li>
                      {/each}
                    </ul>
                  </div>
                {/each}
              </div>
            {/each}
          </div>

          <div>
            <h4 class="text-lg font-bold text-black mb-2">Dean's Lister</h4>
            <ul class="list-disc pl-6">
              {#each edu.deansLister as deansList}
                <li class="text-lg font-light mb-2">{deansList}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
