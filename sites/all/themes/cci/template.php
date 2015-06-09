<?php

function cci_preprocess_html(&$vars) {
  $path = drupal_get_path_alias($_GET['q']);
  $aliases = explode('/', $path);

  foreach($aliases as $alias) {
    $vars['classes_array'][] = drupal_clean_css_identifier($alias);
  }
}

function cci_preprocess_page(&$variables, $hook)
{
    drupal_add_library('system','effects');
    
    $googleMapsAPIKey = 'AIzaSyBbqUxAxDiNBiPVBuS6xtU5EveuN1UFor4';
	drupal_add_js("https://maps.googleapis.com/maps/api/js?key=$googleMapsAPIKey", 'external');
}

function cci_form_alter(&$form, &$form_state, $form_id)
{
    if ($form_id == 'webform_client_form_112')
    {
        $form['submitted']['type_of_project']['#empty_option'] = 'Unknown/Other';
    }
}

?>
