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
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Cell</th>
                                            <th>Function</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="cell"><strong>Mitochondria</strong></td>
                                            <td>
                                                <ul>
                                                    <li><strong>Generates energy</strong> through the glucose oxidation during cellular respiration</li>
                                                    <li>Produce <strong>ATP</strong></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="cell"><strong>Centriole</strong></td>
                                            <td>
                                                <ul>
                                                    <li>Made up ofcomplex arrangement of <strong>microtubules</strong></li>
                                                    <li>Forms <strong>spindle fibre</strong></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="cell"><strong>Golgi apparatus</strong></td>
                                            <td>
                                                <ul>
                                                    <li>New membrane added at one end and vesicles bud off from the other end</li>
                                                    <li><strong>Processes</strong>, <strong>modifies</strong>, <strong>packs</strong> and <strong>transports chemicals</strong> (protein, carbohydrate, and glycoprotein)</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="cell"><strong>Plasma membrane</strong></td>
                                            <td>
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
                                            <td>
                                                <ul>
                                                    <li>Contains hydrolytic enzyme</li>
                                                    <li><strong>Hydrolyses</strong> complex organic molecules</li>
                                                    <li><strong>Breaks down bacteria</strong> and components of damaged cells</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="cell"><strong>Nucleus</strong></td>
                                            <td>
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
                                            <td>
                                                <ul>
                                                    <li>Consists of protein and RNA</li>
                                                    <li>Present on the surface of RER or exists freely in the cytoplasm</li>
                                                    <li>Site of <strong>protein synthesis</strong></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="cell"><strong>Endoplasmic reticulum</strong></td>
                                            <td>
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
                            <p><strong><em><span class="subsection-title">PLANT CELL</span></em></strong></p>
                            
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Cell</th>
                                            <th>Function</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Vacuole</strong></td>
                                            <td>
                                                <ul>
                                                    <li>Young plant cells have small vacuoles, mature plant cells have large vacuoles</li>
                                                    <li>Vacuole in animal cells is small</li>
                                                    <li>In plant cell - water absorbed into vacuole and the cell becomes <strong>turgid</strong></li>
                                                    <li>In unicellular animals - vacuole contracts during <strong>osmoregulation</strong>, <strong>osmosis</strong>, and <strong>excretion</strong></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Chloroplast</strong></td>
                                            <td>
                                                <ul>
                                                    <li>Contain <strong>chlorophyll</strong> pigments in grana</li>
                                                    <li>Chlorophyll <strong>absorbs sunlight</strong> and converts it to chemical energy during photosynthesis</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Cytoplasm</strong></td>
                                            <td>
                                                <ul>
                                                    <li>Contains organic compounds (protein, lipid, and carbohydrate) and inorganic compounds (potassium ions)</li>
                                                    <li>Acts as <strong>medium</strong> for biochemical reactions</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Cell wall</strong></td>
                                            <td>
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
                            <h3><strong><em><span class="comparison-title">DIFFERENCES AND SIMILARITIES BETWEEN PLANT CELL AND ANIMAL CELL</span></em></strong></h3>
                            
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
                                            <td class="animal-cell">Does not have fixed shape</td>
                                        </tr>
                                        <tr>
                                            <td class="plant-cell">Has a cell wall</td>
                                            <td class="animal-cell">Does not have a cell wall</td>
                                        </tr>
                                        <tr>
                                            <td class="plant-cell">Has chloroplast</td>
                                            <td class="animal-cell">Does not have chloroplasts</td>
                                        </tr>
                                        <tr>
                                            <td class="plant-cell">Has a large vacuole</td>
                                            <td class="animal-cell">No vacuole (if present it's small)</td>
                                        </tr>
                                        <tr>
                                            <td class="plant-cell">Stores carbohydrates in form of starch</td>
                                            <td class="animal-cell">Stores carbohydrates in form of glycogen</td>
                                        </tr>
                                        <tr>
                                            <td class="plant-cell">Does not have a centriole</td>
                                            <td class="animal-cell">Has centrioles</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="common-structure">Made of nucleus, cytoplasm, plasma membrane, Golgi apparatus, mitochondrion, endoplasmic reticulum, and ribosomes.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="video-wrapper"><iframe src="https://www.youtube.com/embed/QUhW6faTeoM?si=tkwkqQQtS4t-DhpI" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>` },
                        { title: "Energy Production and Use", content: "Energy production and use ...." },
                        { title: "Carbohydrates", content: "Carbohydrates ...." }
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