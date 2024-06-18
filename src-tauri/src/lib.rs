// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use serde:: { Serialize, Deserialize };
use tauri::Manager;

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

#[derive(Debug, Serialize, Deserialize)]
struct MyMessage {
    field_str: String,
    field_u32: u32,
}

#[tauri::command]
fn command_with_object(message: MyMessage) -> MyMessage {
    let MyMessage {
        field_str,
        field_u32,
    } = message;

    MyMessage {
        field_str: format!("hello {}", field_str),
        field_u32: field_u32 + 1,
    }
}

#[tauri::command]
fn command_with_error(arg: u32) -> Result<String, String> {
    if arg % 2 == 0 {
        Ok(format!("偶数: {}", arg))
    } else {
        Err(format!("奇数: {}", arg))
    }
}

#[tauri::command]
async fn async_command(arg: u32) -> String {
    println!("引数: {}", arg);
    "hello".into()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let _id = app.listen_any("front-to-back", |event| {
                println!(
                    "got front-to-back with payload {:?}",
                    event.payload()
                )
            });

            let app_handle = app.app_handle().clone();
            std::thread::spawn(move || loop {
                // https://docs.rs/tauri/2.0.0-beta.22/tauri/trait.Manager.html#method.emit
                app_handle.emit("back-to-front", "ping frontend".to_string()).unwrap();
                std::thread::sleep(std::time::Duration::from_secs(1))
            });
            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            simple_command,
            command_with_message,
            command_with_object,
            command_with_error,
            async_command,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
