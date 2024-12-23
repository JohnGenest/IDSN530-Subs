<?php
    $path = './';
    include 'includes/header.php';
    include 'includes/nav.php';
?>

      <main>
        <br>
        <br>
        <br>
            <section>
            <h2>
                ABOUT ME:
           </h2>
            <h3>I'm a resourceful, tirelessly curious and purpose-driven professional with cross-functional experience in brand, 
            product and customer experience management.</h3> 
            <h3>My ever-evolving combination of strategic vision, interdisciplinary skills and inherent passion for progress drive 
            a proven ability to help create, scale and evolve customer life-enriching offerings and experiences.</h3>

        <a href="https://linkedin.com/in/john-genest/" target="_blank">Looking For My LinkedIn?</a>
            <br>
            <br>
        <a href="https://www.johngenest.com" target="_blank">Looking For My Website?</a>
          </section>
            <br>
            <br>
            <br>
        <section>
            <h2>Contact Me</h2>
            <form action="process-contact.php" method="POST" class="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                
                <button type="submit">Send Message</button>
            </form>
        </section>
        </main>
        <br>
        <br>
        <br>

<?php include 'includes/footer.php'; ?>