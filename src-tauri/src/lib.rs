// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn simple_command() {
    println!("Reactから呼ばれたよ")
}

#[tauri::command]
fn command_with_message(message: String) -> String {
    println!("Reactから呼ばれたよ2");
    format!("Hello, {}!", message)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            simple_command,
            command_with_message,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
