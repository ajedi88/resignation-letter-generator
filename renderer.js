function generateLetter() {
    const tone = document.getElementById('tone').value;
    const reason = document.getElementById('reason').value;
    const manager = document.getElementById('manager').value;
    const gratitude = document.getElementById('gratitude').value;
    const jab = document.getElementById('jab').value;

    let letter = "To Whom It May Concern,\n\n";

    // Add content based on the selected tone
    switch (tone) {
        case 'professional':
            letter += "I am writing to formally resign from my position at the company, effective two weeks from today. This decision has been made after much consideration, countless cups of coffee, and perhaps a few existential crises. I am grateful for the opportunities provided during my tenure here—most of them, anyway.\n\n";
            break;
        case 'sincere':
            letter += "After careful reflection, probably while staring blankly at my computer screen at 2 AM, I have made the decision to resign. While I’ve appreciated the chance to contribute, learn, and occasionally question my life choices, it’s clear that this step is necessary for my personal and professional growth.\n\n";
            break;
        case 'humorous':
            letter += "Well, it’s been a wild ride, but the time has come for me to hang up my hat and step off this rollercoaster. Effective immediately, I’ll be embarking on a new adventure—one that doesn’t involve navigating the workplace equivalent of a soap opera crossed with an escape room.\n\n";
            break;
        case 'passive-aggressive':
            letter += "I’ve come to the realization that my time here has reached its natural conclusion, kind of like milk past its expiration date. This isn’t goodbye so much as it is an inevitable escape from what’s become an increasingly surreal episode of ‘Survivor: Office Edition.’\n\n";
            break;
        case 'snarky':
            letter += "Consider this my official notice—I’m stepping down from my role, effective immediately. It’s not every day that you’re pushed to your limits by the very place that’s supposed to nurture your career, but hey, life’s full of surprises, isn’t it?\n\n";
            break;
        case 'sarcastic':
            letter += "After careful consideration, I’ve decided to leave my role, which has been about as thrilling as watching paint dry, but with more emails. I’ve learned a lot here, mainly how to bite my tongue and smile through it.\n\n";
            break;
        case 'motivational':
            letter += "In every journey, there comes a time when you must take a leap of faith. Today, I’m taking that leap—out of this job and into something that doesn’t require me to Google ‘how to survive the daily grind’ every morning.\n\n";
            break;
        case 'brutally_honest':
            letter += "Let’s cut to the chase: I’m resigning because I can’t keep pretending this is a dream job when it’s more like a waking nightmare. It’s time for me to find something that doesn’t make me question my life choices every Monday.\n\n";
            break;
        case 'heartfelt':
            letter += "Leaving this job was not an easy decision, but it’s one that I’ve made with a heavy heart. I’ve grown a lot here, not just professionally but also personally. Thank you for being part of my journey.\n\n";
            break;
    }

    // Add content based on the reason for leaving
    switch (reason) {
        case 'better_opportunity':
            letter += "I have accepted a position that more closely aligns with my long-term career goals and offers the kind of growth opportunities I’ve been chasing like a kid after an ice cream truck. I’m excited about the new challenges ahead, although I’ll certainly miss some aspects of this role—like the snacks, maybe.\n\n";
            break;
        case 'toxic_environment':
            letter += "After much reflection—and a few deep dives into the ‘Signs You Should Quit Your Job’ listicles—I’ve concluded that the current work environment is not conducive to my well-being or professional growth. It’s been a learning experience, though often in the way that touching a hot stove teaches you to keep your hands to yourself.\n\n";
            break;
        case 'overwork':
            letter += "The workload and demands of this role have reached a point where maintaining a healthy work-life balance has become less of a challenge and more of a myth, like Bigfoot or unicorns. While I’ve done my best to manage, it’s clear that this situation is unsustainable without cloning myself—an option my current benefits package doesn’t cover.\n\n";
            break;
        case 'personal_reasons':
            letter += "Due to personal reasons that require my full attention—like remembering what sleep feels like—I must step away from my position here. This decision was not made lightly, but it is the right choice for my current circumstances (and sanity).\n\n";
            break;
        case 'managerial_issues':
            letter += "My decision to resign is largely influenced by the challenges I’ve faced regarding management. Effective leadership is crucial to job satisfaction, and unfortunately, I’ve had more luck finding the Loch Ness Monster. It’s been real, but it’s time for me to prioritize working somewhere that values clear direction over constant confusion.\n\n";
            break;
        case 'no_growth':
            letter += "I have decided to pursue opportunities that offer more room for growth and development. While I’ve valued my time here, it’s become clear that my aspirations lie beyond what this role currently offers, which feels a bit like trying to grow an oak tree in a flower pot.\n\n";
            break;
        case 'unfulfilled_promises':
            letter += "Despite initial promises of development, support, and growth, I’ve found myself stuck in a loop of unfulfilled expectations. I’m looking forward to a place where commitments aren’t just buzzwords thrown around at annual reviews.\n\n";
            break;
        case 'office_drama':
            letter += "The level of drama in this office rivals that of a high school cafeteria, and I’ve decided that my time is better spent in an environment where gossip isn’t part of the job description.\n\n";
            break;
        case 'better_management':
            letter += "I’m leaving to seek better management—somewhere that understands leadership doesn’t mean ruling with an iron fist or treating every meeting like a game of chess. It’s been an experience, but I’m ready for something different.\n\n";
            break;
    }

    // Manager relationship content
    switch (manager) {
        case 'supportive':
            letter += "I’d like to express my gratitude to my manager for their consistent support and guidance. Working under someone who genuinely cares about the team’s success has been a highlight of my time here—if not a rare and delightful surprise in this field.\n\n";
            break;
        case 'neutral':
            letter += "While my relationship with management has been cordial, it’s become evident that we are not aligned in terms of expectations, goals, or, occasionally, what day of the week it is. Nevertheless, I appreciate the experience.\n\n";
            break;
        case 'micromanager':
            letter += "Navigating the complexities of a micromanaged environment has taught me patience, resilience, and how to avoid eye contact during surprise visits. It’s been a challenging dynamic, and while it’s been…interesting, I won’t particularly miss it.\n\n";
            break;
        case 'dismissive':
            letter += "I have often felt dismissed and undervalued, which has made it increasingly difficult to stay motivated. It’s been like trying to build a sandcastle in a windstorm. I’m excited to be moving on to a space where my contributions might get more than a passing glance.\n\n";
            break;
        case 'ghosting_boss':
            letter += "My boss has been about as present as a ghost in a haunted house—there when you least need it, and nowhere to be found when you do. It’s been enlightening, but I’m ready for a more solid leadership presence.\n\n";
            break;
        case 'clueless_leader':
            letter += "It’s hard to follow someone who seems lost in the labyrinth of their own to-do list. My time here has been educational in that ‘what not to do’ kind of way, and I’m looking forward to clearer guidance in my next role.\n\n";
            break;
        case 'passive_aggressive_manager':
            letter += "I’ve had enough of the passive-aggressive Post-it notes and the meetings that could have been a group chat. It’s been a real joy trying to decipher the mixed signals, but it’s time for me to move on.\n\n";
            break;
    }

    // Gratitude level
    switch (gratitude) {
        case 'a_lot':
            letter += "I am genuinely grateful for the opportunities, the challenges, and the growth I’ve experienced during my tenure. This journey has been instrumental in shaping my career path, and I will always value the lessons learned here, even the ones I didn’t sign up for.\n\n";
            break;
        case 'some':
            letter += "While there were ups and downs (sometimes simultaneously), I appreciate the opportunities I had to develop my skills and work with some truly talented individuals. The experience has been valuable, even if it’s time for me to turn the page and see what the next chapter holds.\n\n";
            break;
        case 'minimal':
            letter += "Thanks for the paychecks and the occasional moments of professional satisfaction. It’s been a ride, but it’s time for me to disembark and catch a different bus—preferably one that’s going somewhere warm and far from performance reviews.\n\n";
            break;
        case 'none':
            letter += "Thank you for the memories, such as they are. I’m looking forward to what comes next—hopefully, something with a little less drama and a lot more room for creativity.\n\n";
            break;
        case 'ironic_gratitude':
            letter += "I’d like to thank the company for the unforgettable experience of constantly pushing my limits—especially my patience. It’s been an education in what not to tolerate, and I’ll carry those lessons with me forever, like a weird, unwanted souvenir.\n\n";
            break;
        case 'over_the_top_gratitude':
            letter += "Words cannot express the profound, life-altering journey that working here has been. Just kidding—it’s been an interesting trip, but I’m ready to leave this thrill ride for something with a little less whiplash.\n\n";
            break;
    }

    // Closing jabs, including the full roast
    switch (jab) {
        case 'professional':
            letter += "I wish the company continued success in the future and hope that the team will thrive as it moves forward. Best regards,\n\n[Your Name]";
            break;
        case 'light_jab':
            letter += "I hope that the company finds a way to address the challenges faced by its employees and fosters an environment that truly values them. Best of luck,\n\n[Your Name]";
            break;
        case 'moderate_jab':
            letter += "I look forward to a future where I’m no longer navigating obstacles that shouldn’t exist in the first place. Wishing you the best, truly.\n\n[Your Name]";
            break;
        case 'full_burn':
            letter += "I look forward to a future without unsolicited management tips, micromanagement, and the constant need to prove my worth. Good luck managing without me.\n\n[Your Name]";
            break;
        case 'full_roast':
            letter += "Consider this my official declaration of independence from the never-ending circus that is this workplace. Between the endless meetings that could have been emails, the revolving door of talent that only seems to spin one way, and the daily battle to pretend everything is fine, it’s time for me to exit stage left. I’m off to find a place where my skills are valued, my sanity is intact, and where ‘support’ isn’t just something you find in the bra section. Good luck—you’ll need it. Yours never again,\n\n[Your Name]";
            break;
    }

    // Display the generated letter
    document.getElementById('output').innerText = letter;
}
