document.addEventListener('DOMContentLoaded', function() {
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            subject: params.get('subject'),
            tingkatan: params.get('tingkatan'),
            chapter: params.get('chapter')
        };
    }

    function setPageTitle(subject, tingkatan, chapter) {
        document.title = `Chapter ${chapter}`;
        document.getElementById('subtopic-title').textContent = `${subject} Form ${tingkatan} - Chapter ${chapter}`;
    }

    function setErrorPage() {
        document.title = 'Not Found';
        document.getElementById('subtopic-title').textContent = 'Subtopics Not Found';
        document.getElementById('subtopic').innerHTML = '<div>No subtopics available</div>';
    }

    function renderSubtopics(subtopics, chapter) {
        const subtopicContainer = document.getElementById('subtopic');
        subtopicContainer.innerHTML = '';

        if (subtopics.length > 0) {
            const combinedContent = subtopics.map((subtopic, index) => `
                <h4 style="text-align: left; font-size:2rem; margin-top: 0;">${chapter}.${index + 1} ${subtopic.title}</h4>
                <div>${subtopic.content}</div>
            `).join('');
        
            subtopicContainer.innerHTML = combinedContent;
        } else {
            subtopicContainer.innerHTML = '<div>No subtopics available</div>';
        }
    }

    function getSubtopics(subject, tingkatan, chapter) {
        const subtopics = {
            "Biology": {
                "4": {
                    "1": [
                        { title: "Introduction to Biology", content:  ``},
                        { title: "Cells and Cellular Structure", content: "Cells and cellular structure ...." },
                        { title: "Cell Division", content: "Cell division ...." }
                    ],
                    "2": [
                        { title: "Cell Structure and Function", content: `<p class="textbook-page"><span class="page-info">Textbook page 22-26</span></p>
                            <p><strong><em><span class="subsection-title">ANIMAL CELL</span></em></strong></p>
                            <div class="content-wrapper">
                                <div class="table-container">
                                    <table>
                                        <thead>
                                            <tr class="animalPlantFunction">
                                                <th>Cell</th>
                                                <th>Function</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Mitochondria</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li><strong>Generates energy</strong> through the glucose oxidation during cellular respiration</li>
                                                        <li>Produce <strong>ATP</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cell"><strong>Centriole</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Made up ofcomplex arrangement of <strong>microtubules</strong></li>
                                                        <li>Forms <strong>spindle fibre</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cell"><strong>Golgi apparatus</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>New membrane added at one end and vesicles bud off from the other end</li>
                                                        <li><strong>Processes</strong>, <strong>modifies</strong>, <strong>packs</strong> and <strong>transports chemicals</strong> (protein, carbohydrate, and glycoprotein)</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cell"><strong>Plasma membrane</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Made of protein and phospholipid</li>
                                                        <li>Partially permeable</li>
                                                        <li>Separates cell content from the external environment</li>
                                                        <li><strong>Controls movement</strong> of substances into and out of the cell</li>
                                                        <li>Allows <strong>exchange</strong> of nutrients, respiratory gases, and waste materials</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cell"><strong>Lysosome</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Contains hydrolytic enzyme</li>
                                                        <li><strong>Hydrolyses</strong> complex organic molecules</li>
                                                        <li><strong>Breaks down bacteria</strong> and components of damaged cells</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cell"><strong>Nucleus</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Contains chromosomes, nucleolus, and nucleoplasm</li>
                                                        <li><strong>Controls</strong> all cell activities</li>
                                                        <li>Has chromosomes that contain <strong>DNA</strong></li>
                                                        <li>DNA determines <strong>cell characteristics</strong> and <strong>metabolic function</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cell"><strong>Ribosome</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Consists of protein and RNA</li>
                                                        <li>Present on the surface of RER or exists freely in the cytoplasm</li>
                                                        <li>Site of <strong>protein synthesis</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="cell"><strong>Endoplasmic reticulum</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li><strong>Transport system</strong> within the cell</li>
                                                        <li>Provides <strong>wide surface</strong> for enzyme attachment and biochemical reactions</li>
                                                    </ul>
                                                    <p><strong>Rough ER</strong></p>
                                                    <ul>
                                                        <li>Has <strong>ribosomes</strong> on its surface</li>
                                                        <li><strong>Transports proteins</strong> synthesized by ribosomes</li>
                                                    </ul>
                                                    <p><strong>Smooth ER</strong></p>
                                                    <ul>
                                                        <li>Does not have ribosomes</li>
                                                        <li><strong>Synthesizes</strong> and <strong>transports glycerol</strong> and <strong>lipids</strong>, carries out the <strong>detoxification</strong> of drugs and metabolic by-products</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p><strong><em><span class="subsection-title">PLANT CELL</span></em></strong></p>
                            <div class="content-wrapper">
                                <div class="table-container">
                                    <table>
                                        <thead>
                                            <tr class="animalPlantFunction">
                                                <th>Cell</th>
                                                <th>Function</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Vacuole</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Water get absorbed into vacuole and the cell becomes <strong>turgid</strong></li>
                                                        <li>In unicellular animals - vacuole contracts during <strong>osmoregulation</strong>, <strong>osmosis</strong>, and <strong>excretion</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Chloroplast</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Contain <strong>chlorophyll</strong> pigments in grana</li>
                                                        <li>Chlorophyll <strong>absorbs sunlight</strong> and converts it to chemical energy during photosynthesis</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Cytoplasm</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Contains organic compounds (protein, lipid, and carbohydrate) and inorganic compounds (potassium ions)</li>
                                                        <li>Acts as <strong>medium</strong> for biochemical reactions</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><strong>Cell wall</strong></td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Made from cellulose fibre</li>
                                                        <li>Fully permeable</li>
                                                        <li>Maintains <strong>shape</strong> of plant cells</li>
                                                        <li>Provides <strong>mechanical support</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                             </div>
                            <h4><strong><em><span class="comparison-title">DIFFERENCES AND SIMILARITIES BETWEEN PLANT CELL AND ANIMAL CELL</span></em></strong></h4>
                            <div class="content-wrapper">
                                <div class="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="plant-cell-header">Plant Cell</th>
                                                <th class="animal-cell-header">Animal Cell</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="plant-cell">Has fixed shape</td>
                                                <td class="animal-cell">No fixed shape</td>
                                            </tr>
                                            <tr>
                                                <td class="plant-cell">Has a cell wall</td>
                                                <td class="animal-cell">No cell wall</td>
                                            </tr>
                                            <tr>
                                                <td class="plant-cell">Has chloroplast</td>
                                                <td class="animal-cell">No chloroplasts</td>
                                            </tr>
                                            <tr>
                                                <td class="plant-cell">Has a large vacuole</td>
                                                <td class="animal-cell">No vacuole</td>
                                            </tr>
                                            <tr>
                                                <td class="plant-cell">Stores carbohydrates in form of starch</td>
                                                <td class="animal-cell">Stores carbohydrates in form of glycogen</td>
                                            </tr>
                                            <tr>
                                                <td class="plant-cell">No centriole</td>
                                                <td class="animal-cell">Has centrioles</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="common-structure">Made of nucleus, cytoplasm, plasma membrane, Golgi apparatus, mitochondrion, endoplasmic reticulum, and ribosomes.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                             </div>` },
                        { title: "Living Processes in Unicellular Organism", content: `<p class="textbook-page"><span class="page-info">Textbook page 28-29</span></p>                                     
                                    <table>
                                        <thead>
                                            <tr class="unicellularProcess">
                                                <th colspan="2">Movement</th>
                                            </tr>
                                            <tr class="unicellularProcess">
                                                <th>Amoeba sp.</th>
                                                <th>Paramecium sp.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Extending out pseudopodium (false feet)</li>
                                                        <li>Cytoplasm flow into pseudopodium</li>
                                                    </ul>
                                                </td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Rhythmic cilia beats</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table>
                                        <thead>
                                            <tr class="unicellularProcess">
                                                <th colspan="2">Nutrition</th>
                                            </tr>
                                            <tr class="unicellularProcess">
                                                <th>Amoeba sp.</th>
                                                <th>Paramecium sp.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Trap food particles using pseudopodium</li>
                                                        <li>Fuses food vacuole with lysosome for hydrolysis by lysozyme</li>
                                                        <li>Absorbs nutrients into the cytoplasm</li>
                                                        <li>Expels undigested food during movement</li>
                                                    </ul>
                                                </td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Rhythmic cilia beat helps transfer food particles into the oral groove</li>
                                                        <li>Expels undigested food through anus</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table">
                                            <tr>
                                                <th class="unicellularProcess" id="respiration">Respiration</th>
                                            </tr>
                                            <tr>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Occur through plasma membrane by <strong>simple diffusion</strong> on the cell surface</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="excretion-table">
                                            <tr>
                                                <th class="unicellularProcess" id="excretion">Excretion</th>
                                            </tr>
                                            <tr>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li>Waste (carbon dioxide, ammonia, etc) are removed by <strong>diffusion</strong></li>
                                                        <li>Water will diffuse via <strong>osmosis</strong> and fill contractile vacuole</li>
                                                        <li>When vacuole expands to maximum size, contraction occurs and water is excreted from time to time - <strong>osmoregulation</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                        <table>
                                            <thead>
                                                <tr class="unicellularProcess">
                                                    <th>Species</th>
                                                    <th>Favorable Conditions</th>
                                                    <th>Unfavorable Conditions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td><strong>Amoeba sp.</strong></td>
                                                <td rowspan="2">Asexual reproduction (binary fission via mitosis)</td>
                                                <td>Forms <strong>spores</strong> that germinate when conditions improve</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Paramecium sp.</strong></td>
                                                    <td>Sexual reproduction <strong>(conjugation)</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        ` },
                        { title: "Living Processes in Multicellular Organisms", content: `<p class="textbook-page"><span class="page-info">Textbook page 30-36</span></p>

                        <!-- TYPE OF CELLS FOR PLANTS-->  

                        <div id="typeOfCells">
                        <div id="human-PlantCellsTitle">
                        <p>Human Cells</p>
                        </div> 
                        <div class="vertical-line"></div>   
                        </div>
                        <table id="tableOfCells">
                            <thead id="headOfCells">
                                <tr class="cellType">
                                    <th>Muscle cell</th>
                                    <th>Epithelial cell</th>
                                    <th>Nerve cell</th>
                                </tr>
                                </thead>
                                <tr>
                                    <td class="cell-function">
                                        <ul>
                                            <li>Multinuclear striated fibres</li>
                                            <li>Contract and relax to generate movement</li>
                                            <li>Three types: cardiac, skeletal, smooth</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                            <li>Thin and flat</li>
                                            <li>Coats organ surface</li>
                                            <li>Example: Ciliated cells, goblet cells in the respiratory tract</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                            <li>Long and thin</li>
                                            <li>Send nerve impulses</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="cellType">
                                    <th>White blood cell</th>
                                    <th>Red blood cell</th>
                                    <th>Sperm cell</th>
                                </tr>
                                <tr>
                                    <td class="cell-function">
                                        <ul>
                                        <li>Can change shape</li>
                                        <li>Destroy pathogens</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                        <li>Does not have nucleus</li>
                                        <li>Biconcave disc</li>
                                        <li>Optimise transportation of oxygen</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                        <li>Has long tail to swim towards ovum</li>
                                        <li>The head carries a set of chromosomes from the male</li>
                                        </ul>
                                    </td>
                                </tr>
                            
                        
                            <!-- TYPE OF CELLS FOR PLANTS-->   

                        </table>    
                        <div id="typeOfCells">
                        <div id="human-PlantCellsTitle">
                        <p> Plant Cells</p>
                        </div> 
                        <div class="vertical-line"></div>   
                        </div>
                        <table id="tableOfCells">
                            <thead id="headOfCells">
                                <tr class="cellType">
                                    <th>Sieve tub element</th>
                                    <th>Xylem vessel</th>
                                    <th>Guard cell</th>
                                </tr>
                                </thead>
                                <tr>
                                    <td class="cell-function">
                                        <ul>
                                            <li>Long cylindrical tubes arranged from end to end</li>
                                            <li>Transport organic materials from leaves to storage organs</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                            <li>Long, continuous hollow tube</li>
                                            <li>Transport water and mineral salts from roots to other parts</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                            <li>Modified lower epidermal cells with thicker cell wall on the inner side</li>
                                            <li>Controls opening and closing of stoma</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="cellType">
                                    <th>Palisade mesophyll cell</th>
                                    <th>Spongy mesophyll cell</th>
                                    <th>Root hair cell</th>
                                </tr>
                                <tr>
                                    <td class="cell-function">
                                        <ul>
                                        <li>Long cylindrical cells arranged vertically</li>
                                        <li>High chlorophyll density</li>
                                        <li>Arrangement allows max absorption of sunlight</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                        <li>Loosely arranged</li>
                                        <li>Large air space allows exchange of gas from inside of leaves to the PM cells</li>
                                        </ul>
                                    </td>
                                    <td class="cell-function">
                                        <ul>
                                        <li>Has long projection</li>
                                        <li>Adds surface area for water and mineral salt absorption</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>    
                        <h4><strong><em><span class="comparison-title">DENSITY OF CERTAIN CELL COMPONENTS AND SPECIALISED CELL FUNCTIONS</span></em></strong></h4>

                            <!--TABLE FOR CELL DENSITY-->

                        <table>
                                            <thead>
                                                <tr class="lackOfOrganelles">
                                                    <th>Cell component</th>
                                                    <th>Type of cell</th>
                                                    <th>Function</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td rowspan="3">Mitochondrion</td>
                                                <td><strong>Sperm</strong> cell</td>
                                                <td>Provide energy to <strong>swim</strong>towards ovum</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Muscle</strong> cell</td>
                                                    <td>Requires a lot of energy for muscles to  <strong>contract</strong> and cause movements</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Meristematic</strong> cell</td>
                                                    <td>Requires energy for cells to <strong>divide</strong> and produce new cells</td>
                                                </tr>



                                                <tr>
                                                    <td rowspan="3">Chloroplast</td>
                                                    <td><strong>Palisade</strong> mesophyll cell</td>
                                                    <td rowspan="3">To absorb energy from <strong>sunlight</strong> and carry out <strong>photosynthesis</strong></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Spongy</strong> mesophyll cell</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Guard</strong> cell</td>
                                                </tr>



                                                <tr>
                                                    <td rowspan="2">RER & Golgi apparatus</td>
                                                    <td><strong>Pancreatic</strong> cell</td>
                                                <td class="cell-function">
                                                    <ul>
                                                        <li><strong>Transport</strong> protein synthesised by ribosomes to the Golgi apparatus</li>
                                                        <li>Modify protein into specific <strong>secretions<strong></li>
                                                    </ul>
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td class="cell-function"><strong>Goblet</strong> cell</td>
                                                    <td>
                                                        <ul>
                                                            <li>Secretes <strong>mucus</strong> to trap dust and microorganisms in respiratory tract</li>
                                                            <li>Help in the <strong>digestion</strong> of food</li>
                                                        </ul>
                                                    </td>


                                                </tr>
                                                <tr>
                                                    <td>SER & Golgi Apparatus</td>
                                                    <td><strong>Liver</strong> cell</td>
                                                    <td>Synthesise <strong>lipids</strong> and <strong>detoxifies</strong> drugs & toxins</td>
                                                </tr>
                                            </tbody>
                                        </table>
                             <!-- TABLE FOR DEFICIENCY OF ORGANELLES -->

                             <h4><strong><em><span class="comparison-title">EFFECT OF DEFICIENCY, ABSENCE OR FAILURE OF AN ORGANELLE IN CELLS</span></em></strong></h4>

                             <table>
                                <thead>
                                    <tr class="lackOfOrganelles">
                                        <th colspan="2">What happens when _______ is deficient / absent / fails to function properly?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lysosome</td>
                                        <td class="cell-function">
                                            <ul>
                                                <li>Organic compounds cannot be broken down</li>
                                                <li>Build up in a cell and become toxic</li>
                                                <li>Damage cells and organs</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mitochondrion</td>
                                        <td class="cell-function">
                                            <ul>
                                                <li>Respiration cannot occur</li>
                                                <li>No energy for cell to carry out activities</li>
                                                <li>Death of organism</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chloroplast</td>
                                        <td class="cell-function">
                                            <ul>
                                                <li>Cell cannot carry out photosynthesis</li>
                                                <li>Plant will die</li>
                                                <li>Less food is synthesised and stunt plant growth</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ribosome</td>
                                        <td class="cell-function">
                                            <ul>
                                                <li>Protein is not synthesised</li>
                                                <li>Cell cannot repair damage, produce hormones and maintain cellular structure</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>

                                 <!-- TABLE FOR DISEASES WHEN LACK OF ORGANELLES -->

                                 <table>
                                    <thead>
                                        <tr class="lackOfOrganelles">
                                            <th colspan="2">Diseases related to the deficiency cell organelles</th>
                                        </tr>
                                        <tr>
                                            <th>Disease</th>
                                            <th>Cause</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tay-Sachs disease</td>
                                            <td class="cell-function">
                                                <ul>
                                                    <li>Caused by failure of lysosomes to produce an enzyme that break down certain fatty substances</li>
                                                    <li>Fatty substances build up to toxic levels in the brain and affect nerve cell function</li>
                                                    <li>Lead to loss of muscle control, blindness, paralysis and death</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mitochondrial dysfunction</td>
                                            <td class="cell-function">
                                                <ul>
                                                    <li>Mitochondria cannot function properly</li>
                                                    <li>Less cellular respiration and less energy</li>
                                                    <li>Lead to excess fatigue, poor growth, muscle weakness</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                 </table>

                            
                            
                            
                            
                            
                            
                            ` },
                        { title: "Carbohydrates", content: "Carbohydrates ...." },
                        { title: "Carbohydrates", content: "Carbohydrates ...." },
                        { title: "Carbohydrates", content: "Carbohydrates ...." },
                        { title: "Carbohydrates", content: "Carbohydrates ...." },
                        { title: "Carbohydrates", content: "Carbohydrates ...." },
                        { title: "Carbohydrates", content: "Carbohydrates ...." },
                    ]
                }
            }
        };

        return subtopics[subject]?.[tingkatan]?.[chapter] || [];
    }

    function setPageContent() {
        const { subject, tingkatan, chapter } = getQueryParams();

        if (subject && tingkatan && chapter) {
            setPageTitle(subject, tingkatan, chapter);
            const subtopics = getSubtopics(subject, tingkatan, chapter);
            renderSubtopics(subtopics, chapter);
        } else {
            setErrorPage();
        }
    }

    setPageContent();
});

function goBack() {
    window.history.back();
}