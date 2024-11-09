<?php
function create_custom_post_types() {
    // Custom Post Type: Plant Highlight
    register_post_type('plant-highlight',
        array(
            'labels' => array(
                'name' => __('Plant Highlights'),
                'singular_name' => __('Plant Highlight')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'plant-highlight'),
            'supports' => array('title', 'editor', 'custom-fields'),
            'show_in_rest' => true,
        )
    );

    // Custom Fields for Plant Highlight
    add_action('add_meta_boxes', function() {
        add_meta_box('plant_meta_box', 'Plant Details', 'render_plant_meta_box', 'plant-highlight', 'normal', 'high');
    });

    // Custom Post Type: Event
    register_post_type('event',
        array(
            'labels' => array(
                'name' => __('Events'),
                'singular_name' => __('Event')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'event'),
            'supports' => array('title', 'editor', 'custom-fields'),
            'show_in_rest' => true,
        )
    );

    // Custom Fields for Event
    add_action('add_meta_boxes', function() {
        add_meta_box('event_meta_box', 'Event Details', 'render_event_meta_box', 'event', 'normal', 'high');
    });
}
add_action('init', 'create_custom_post_types');

// Render meta box for Plant Highlight
function render_plant_meta_box($post) {
    // Get existing values for custom fields, if any
    $name = get_post_meta($post->ID, 'name', true);
    $description = get_post_meta($post->ID, 'description', true);
    $difficulty = get_post_meta($post->ID, 'difficulty', true);
    $region = get_post_meta($post->ID, 'region', true);
    $poisonous = get_post_meta($post->ID, 'poisonous', true);
    $light_level = get_post_meta($post->ID, 'light_level', true);
    ?>
    <label>Name:</label>
    <input type="text" name="name" value="<?php echo esc_attr($name); ?>" /><br>
    
    <label>Description:</label>
    <textarea name="description"><?php echo esc_textarea($description); ?></textarea><br>
    
    <label>Difficulty:</label>
    <input type="text" name="difficulty" value="<?php echo esc_attr($difficulty); ?>" /><br>
    
    <label>Region:</label>
    <input type="text" name="region" value="<?php echo esc_attr($region); ?>" /><br>
    
    <label>Poisonous (Yes/No):</label>
    <input type="text" name="poisonous" value="<?php echo esc_attr($poisonous); ?>" /><br>
    
    <label>Light Level:</label>
    <input type="text" name="light_level" value="<?php echo esc_attr($light_level); ?>" /><br>
    <?php
}

// Render meta box for Event
function render_event_meta_box($post) {
    // Get existing values for custom fields, if any
    $name = get_post_meta($post->ID, 'name', true);
    $location = get_post_meta($post->ID, 'location', true);
    $date = get_post_meta($post->ID, 'date', true);
    $description = get_post_meta($post->ID, 'description', true);
    ?>
    <label>Name:</label>
    <input type="text" name="name" value="<?php echo esc_attr($name); ?>" /><br>
    
    <label>Location:</label>
    <input type="text" name="location" value="<?php echo esc_attr($location); ?>" /><br>
    
    <label>Date:</label>
    <input type="date" name="date" value="<?php echo esc_attr($date); ?>" /><br>
    
    <label>Description:</label>
    <textarea name="description"><?php echo esc_textarea($description); ?></textarea><br>
    <?php
}

// Save the custom fields data when saving the post
function save_custom_fields_data($post_id) {
    if (array_key_exists('name', $_POST)) {
        update_post_meta($post_id, 'name', sanitize_text_field($_POST['name']));
    }
    if (array_key_exists('description', $_POST)) {
        update_post_meta($post_id, 'description', sanitize_textarea_field($_POST['description']));
    }
    if (array_key_exists('difficulty', $_POST)) {
        update_post_meta($post_id, 'difficulty', sanitize_text_field($_POST['difficulty']));
    }
    if (array_key_exists('region', $_POST)) {
        update_post_meta($post_id, 'region', sanitize_text_field($_POST['region']));
    }
    if (array_key_exists('poisonous', $_POST)) {
        update_post_meta($post_id, 'poisonous', sanitize_text_field($_POST['poisonous']));
    }
    if (array_key_exists('light_level', $_POST)) {
        update_post_meta($post_id, 'light_level', sanitize_text_field($_POST['light_level']));
    }
    if (array_key_exists('location', $_POST)) {
        update_post_meta($post_id, 'location', sanitize_text_field($_POST['location']));
    }
    if (array_key_exists('date', $_POST)) {
        update_post_meta($post_id, 'date', sanitize_text_field($_POST['date']));
    }
}
add_action('save_post', 'save_custom_fields_data');

// Custom Fields zur REST API hinzufügen
function register_custom_fields() {
    // Custom Fields für Plant Highlight
    register_meta('post', 'name', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));
    register_meta('post', 'description', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));
    register_meta('post', 'difficulty', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));
    register_meta('post', 'region', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));
    register_meta('post', 'poisonous', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));
    register_meta('post', 'light_level', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));

    // Custom Fields für Event
    register_meta('post', 'location', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));
    register_meta('post', 'date', array(
        'show_in_rest' => true,
        'type' => 'string',
        'single' => true,
    ));
}
add_action('init', 'register_custom_fields');
