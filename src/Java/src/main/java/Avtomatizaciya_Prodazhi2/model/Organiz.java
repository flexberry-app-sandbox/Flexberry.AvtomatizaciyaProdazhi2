package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Организ
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2Организ")
@Table(schema = "public", name = "Организ")
public class Organiz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Организация")
    private String организация;


    public Organiz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОрганизация() {
      return организация;
    }

    public void setОрганизация(String организация) {
      this.организация = организация;
    }


}