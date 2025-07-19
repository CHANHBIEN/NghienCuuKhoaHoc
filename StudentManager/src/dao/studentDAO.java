package dao;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import model.student;

import java.io.*;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
public class studentDAO {
	private static final String FILE_PATH = "data/students.json";
	private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public static List<student> readstudents() {
        try (Reader reader = new FileReader(FILE_PATH)) {
            Type listType = new TypeToken<ArrayList<student>>() {}.getType();
            return gson.fromJson(reader, listType);
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    public static void writestudents(List<student> students) {
        try (Writer writer = new FileWriter(FILE_PATH)) {
            gson.toJson(students, writer);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
